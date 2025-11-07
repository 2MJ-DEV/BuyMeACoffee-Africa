import { getPrisma } from "../lib/prisma.js";

const prisma = getPrisma();

const PUBLIC_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  role: true,
  bio: true,
  githubId: true,
  githubUsername: true,
  githubAvatarUrl: true,
  createdAt: true,
  updatedAt: true,
};

export async function updateProfile(req, res, next) {
  try {
    const userId = req.user.id;
    const { name, bio } = req.body;

    const updateData = {};
    if (name !== undefined) updateData.name = name.trim();
    if (bio !== undefined) updateData.bio = bio.trim();

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: PUBLIC_USER_SELECT,
    });

    return res.json({ user });
  } catch (error) {
    return next(error);
  }
}

export async function updatePaymentSettings(req, res, next) {
  try {
    const userId = req.user.id;
    const { mobileMoneyNumber, mobileMoneyProvider } = req.body;

    const updateData = {};
    if (mobileMoneyNumber !== undefined) updateData.mobileMoneyNumber = mobileMoneyNumber.trim();
    if (mobileMoneyProvider !== undefined) updateData.mobileMoneyProvider = mobileMoneyProvider;

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: PUBLIC_USER_SELECT,
    });

    return res.json({ user });
  } catch (error) {
    return next(error);
  }
}
