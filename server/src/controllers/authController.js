import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

const SALT_ROUNDS = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10);
const JWT_SECRET = process.env.JWT_SECRET;
const OAUTH_PROVIDERS = new Set(["google", "github"]);

const ACCOUNT_SELECT = {
  id: true,
  provider: true,
  providerAccountId: true,
  email: true,
  avatarUrl: true,
  createdAt: true,
  updatedAt: true,
};

const USER_PUBLIC_SELECT = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  accounts: {
    select: ACCOUNT_SELECT,
  },
};

function sanitizeUser(user) {
  if (!user) return user;
  const { password: _password, ...rest } = user;
  return rest;
}

export async function registerUser(req, res, next) {
  const {
    name,
    email,
    password,
    provider: rawProvider,
    providerAccountId,
    avatarUrl,
  } = req.body ?? {};

  const provider = rawProvider?.toLowerCase();
  const usingPassword = Boolean(password);
  const usingOAuth = Boolean(provider && providerAccountId);

  if (usingPassword && usingOAuth) {
    return res.status(400).json({
      message: "Choose either password credentials or an OAuth provider to register.",
    });
  }

  if (!usingPassword && !usingOAuth) {
    return res.status(400).json({
      message: "Provide email/password credentials or an OAuth provider.",
    });
  }

  try {
    if (usingPassword) {
      if (!email) {
        return res.status(400).json({ message: "Email is required for password-based signup." });
      }

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(409).json({ message: "Email is already in use." });
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
        select: USER_PUBLIC_SELECT,
      });

      return res.status(201).json({ user });
    }

    if (!OAUTH_PROVIDERS.has(provider)) {
      return res.status(400).json({
        message: "Unsupported OAuth provider.",
      });
    }

    const existingAccount = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId,
        },
      },
      include: {
        user: {
          select: USER_PUBLIC_SELECT,
        },
      },
    });

    if (existingAccount?.user) {
      return res.status(200).json({ user: existingAccount.user });
    }

    const userByEmail = email
      ? await prisma.user.findUnique({
          where: { email },
          select: USER_PUBLIC_SELECT,
        })
      : null;

    if (userByEmail) {
      const user = await prisma.user.update({
        where: { id: userByEmail.id },
        data: {
          name: name ?? userByEmail.name,
          accounts: {
            create: {
              provider,
              providerAccountId,
              email,
              avatarUrl,
            },
          },
        },
        select: USER_PUBLIC_SELECT,
      });

      return res.status(200).json({ user });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        accounts: {
          create: {
            provider,
            providerAccountId,
            email,
            avatarUrl,
          },
        },
      },
      select: USER_PUBLIC_SELECT,
    });

    return res.status(201).json({ user });
  } catch (error) {
    return next(error);
  }
}

export async function loginUser(req, res, next) {
  const {
    email,
    password,
    provider: rawProvider,
    providerAccountId,
  } = req.body ?? {};

  const provider = rawProvider?.toLowerCase();
  const usingPassword = Boolean(password);
  const usingOAuth = Boolean(provider && providerAccountId);

  if (usingPassword && usingOAuth) {
    return res.status(400).json({
      message: "Choose either password credentials or an OAuth provider to log in.",
    });
  }

  if (!usingPassword && !usingOAuth) {
    return res.status(400).json({
      message: "Provide email/password credentials or an OAuth provider.",
    });
  }

  if (!JWT_SECRET) {
    return res.status(500).json({ message: "JWT secret is not configured." });
  }

  try {
    if (usingPassword) {
      if (!email) {
        return res.status(400).json({ message: "Email is required for password-based login." });
      }

      const userWithPassword = await prisma.user.findUnique({
        where: { email },
        include: {
          accounts: {
            select: ACCOUNT_SELECT,
          },
        },
      });

      if (!userWithPassword?.password) {
        return res.status(401).json({ message: "Incorrect email or password." });
      }

      const isPasswordValid = await bcrypt.compare(password, userWithPassword.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect email or password." });
      }

      const token = jwt.sign(
        { sub: userWithPassword.id, email: userWithPassword.email, role: userWithPassword.role },
        JWT_SECRET,
        { expiresIn: "1h" },
      );

      return res.json({ token, user: sanitizeUser(userWithPassword) });
    }

    if (!OAUTH_PROVIDERS.has(provider)) {
      return res.status(400).json({ message: "Unsupported OAuth provider." });
    }

    const account = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId,
        },
      },
      include: {
        user: {
          include: {
            accounts: {
              select: ACCOUNT_SELECT,
            },
          },
        },
      },
    });

    if (!account?.user) {
      return res.status(401).json({ message: "Account not found for this provider." });
    }

    const token = jwt.sign(
      { sub: account.user.id, email: account.user.email, role: account.user.role },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    return res.json({ token, user: sanitizeUser(account.user) });
  } catch (error) {
    return next(error);
  }
}
