-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "mobileMoneyNumber" TEXT,
ADD COLUMN     "mobileMoneyProvider" TEXT,
ADD COLUMN     "publicProfile" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "message" TEXT,
ADD COLUMN     "supporterId" INTEGER,
RENAME COLUMN "userId" TO "creatorId";

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_supporterId_fkey" FOREIGN KEY ("supporterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
