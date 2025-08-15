-- AlterTable
ALTER TABLE "BucketList" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "BucketListItem" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
