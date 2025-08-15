/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BucketList" DROP CONSTRAINT "BucketList_userId_fkey";

-- DropForeignKey
ALTER TABLE "BucketListItem" DROP CONSTRAINT "BucketListItem_userId_fkey";

-- AlterTable
ALTER TABLE "BucketList" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "BucketListItem" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "User";
