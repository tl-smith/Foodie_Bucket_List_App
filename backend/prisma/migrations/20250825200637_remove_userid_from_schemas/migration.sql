/*
  Warnings:

  - You are about to drop the column `userId` on the `BucketList` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `BucketListItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BucketList" DROP COLUMN "userId",
ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "BucketListItem" DROP COLUMN "userId";
