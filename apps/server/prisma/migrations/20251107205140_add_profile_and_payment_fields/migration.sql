-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "mobileMoneyNumber" TEXT,
ADD COLUMN     "mobileMoneyProvider" TEXT;

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "message" TEXT;
