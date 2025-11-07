import { getPrisma } from "../lib/prisma.js";

const prisma = getPrisma();

export async function getDonations(req, res, next) {
  try {
    const userId = req.user.id;

    const donations = await prisma.donation.findMany({
      where: { creatorId: userId },
      orderBy: { createdAt: "desc" },
      include: {
        supporter: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    // Transform the data to include supporter info
    const transformedDonations = donations.map(donation => ({
      id: donation.id,
      amount: donation.amount,
      createdAt: donation.createdAt,
      message: donation.message || null,
      supporter: {
        name: donation.supporter?.name || "Anonymous",
      },
    }));

    return res.json(transformedDonations);
  } catch (error) {
    return next(error);
  }
}
