import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getPrisma } from "../lib/prisma.js";

const prisma = getPrisma();
const parsedSaltRounds = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS ?? "10", 10);
const SALT_ROUNDS = Number.isNaN(parsedSaltRounds) ? 10 : parsedSaltRounds;
const JWT_SECRET = process.env.JWT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const GITHUB_REDIRECT_URI = process.env.GITHUB_REDIRECT_URI;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const PUBLIC_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  githubId: true,
  githubUsername: true,
  githubAvatarUrl: true,
  googleId: true,
  googleAvatarUrl: true,
};

function sanitizeUser(user) {
  if (!user) return null;
  const { password: _password, ...rest } = user;
  return rest;
}

function createAuthResponse(user) {
  if (!JWT_SECRET) {
    throw new Error("JWT secret is not configured.");
  }

  const token = jwt.sign(
    {
      sub: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "1h" },
  );

  return { token, user: sanitizeUser(user) };
}

export async function registerUser(req, res, next) {
  const { name, email, password } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !password) {
    return res.status(400).json({ message: "Name, email, and password are required." });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true },
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
      select: PUBLIC_USER_SELECT,
    });

    return res.status(201).json(createAuthResponse(user));
  } catch (error) {
    return next(error);
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body ?? {};

  if (!email?.trim() || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  if (!JWT_SECRET) {
    return res.status(500).json({ message: "JWT secret is not configured." });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        ...PUBLIC_USER_SELECT,
        password: true,
      },
    });

    if (!user || !user.password) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    return res.json(createAuthResponse(user));
  } catch (error) {
    return next(error);
  }
}

export async function getCurrentUser(req, res) {
  return res.json({ user: req.user });
}

async function exchangeCodeForToken(code) {
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID ?? "",
    client_secret: GITHUB_CLIENT_SECRET ?? "",
    code,
    redirect_uri: GITHUB_REDIRECT_URI ?? "",
  });

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: params,
  });

  if (!response.ok) {
    throw new Error("Failed to exchange GitHub code for access token.");
  }

  const payload = await response.json();

  if (!payload.access_token) {
    throw new Error("GitHub access token missing from response.");
  }

  return payload.access_token;
}

async function fetchGitHubProfile(accessToken) {
  const [profileResponse, emailsResponse] = await Promise.all([
    fetch("https://api.github.com/user", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "BuyMeACoffee-Africa",
      },
    }),
    fetch("https://api.github.com/user/emails", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "BuyMeACoffee-Africa",
      },
    }),
  ]);

  if (!profileResponse.ok) {
    throw new Error("Failed to fetch GitHub user profile.");
  }

  const profile = await profileResponse.json();

  if (!emailsResponse.ok) {
    return { profile, email: null };
  }

  const emails = await emailsResponse.json();
  const primaryEmail = emails.find((entry) => entry.primary && entry.verified)?.email ?? null;

  return { profile, email: primaryEmail };
}

export async function loginWithGitHub(req, res, next) {
  const { code } = req.body ?? {};

  if (!code) {
    return res.status(400).json({ message: "GitHub authorization code is required." });
  }

  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    return res.status(500).json({ message: "GitHub OAuth is not configured on the server." });
  }

  try {
    const accessToken = await exchangeCodeForToken(code);
    const { profile, email } = await fetchGitHubProfile(accessToken);

    if (!profile || !profile.id) {
      return res.status(400).json({ message: "Unable to retrieve GitHub profile." });
    }

    const githubId = String(profile.id);
    const githubUsername = profile.login ?? null;
    const githubAvatarUrl = profile.avatar_url ?? null;

    const normalizedEmail = email?.toLowerCase() ?? null;

    let user = await prisma.user.findUnique({
      where: { githubId },
    });

    if (!user && normalizedEmail) {
      user = await prisma.user.findUnique({
        where: { email: normalizedEmail },
      });
    }

    if (user) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          githubId,
          githubUsername,
          githubAvatarUrl,
          email: user.email ?? normalizedEmail,
          name: user.name ?? profile.name,
        },
        select: {
          ...PUBLIC_USER_SELECT,
          password: true,
        },
      });
    } else {
      user = await prisma.user.create({
        data: {
          email: normalizedEmail,
          name: profile.name ?? githubUsername ?? "GitHub User",
          githubId,
          githubUsername,
          githubAvatarUrl,
        },
        select: {
          ...PUBLIC_USER_SELECT,
          password: true,
        },
      });
    }

    return res.json(createAuthResponse(user));
  } catch (error) {
    return next(error);
  }
}

async function fetchGoogleProfile(accessToken) {
  const response = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Google user profile.");
  }

  return await response.json();
}

export async function loginWithGoogle(req, res, next) {
  const { access_token } = req.body ?? {};

  if (!access_token) {
    return res.status(400).json({ message: "Google access token is required." });
  }

  try {
    const profile = await fetchGoogleProfile(access_token);

    if (!profile || !profile.id) {
      return res.status(400).json({ message: "Unable to retrieve Google profile." });
    }

    const googleId = String(profile.id);
    const googleAvatarUrl = profile.picture ?? null;
    const normalizedEmail = profile.email?.toLowerCase() ?? null;
    const userName = profile.name ?? profile.email?.split("@")[0] ?? "Google User";

    if (!normalizedEmail) {
      return res.status(400).json({ message: "Email is required from Google account." });
    }

    let user = await prisma.user.findUnique({
      where: { googleId },
    });

    if (!user && normalizedEmail) {
      user = await prisma.user.findUnique({
        where: { email: normalizedEmail },
      });
    }

    if (user) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          googleId,
          googleAvatarUrl,
          email: user.email ?? normalizedEmail,
          name: user.name ?? userName,
        },
        select: {
          ...PUBLIC_USER_SELECT,
          password: true,
        },
      });
    } else {
      user = await prisma.user.create({
        data: {
          email: normalizedEmail,
          name: userName,
          googleId,
          googleAvatarUrl,
        },
        select: {
          ...PUBLIC_USER_SELECT,
          password: true,
        },
      });
    }

    return res.json(createAuthResponse(user));
  } catch (error) {
    return next(error);
  }
}
