import { getPrisma } from "../lib/prisma.js";

const prisma = getPrisma();

export async function getDashboardStats(req, res, next) {
  try {
    const userId = req.user.id;

    const donations = await prisma.donation.findMany({
      where: { creatorId: userId },
    });

    const totalDonations = donations.length;
    const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);
    
    // Calculate unique supporters (excluding null supporterId for anonymous donations)
    const supporterIds = donations
      .filter(d => d.supporterId !== null)
      .map(d => d.supporterId);
    const totalSupporters = new Set(supporterIds).size;

    // Calculate monthly growth (simplified - comparing this month to last month)
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    const thisMonthDonations = donations.filter(d => new Date(d.createdAt) >= thisMonth);
    const lastMonthDonations = donations.filter(
      d => new Date(d.createdAt) >= lastMonth && new Date(d.createdAt) < thisMonth
    );

    const monthlyGrowth = lastMonthDonations.length > 0
      ? ((thisMonthDonations.length - lastMonthDonations.length) / lastMonthDonations.length) * 100
      : 0;

    return res.json({
      totalDonations,
      totalAmount,
      totalSupporters,
      monthlyGrowth: Math.round(monthlyGrowth),
    });
  } catch (error) {
    return next(error);
  }
}
