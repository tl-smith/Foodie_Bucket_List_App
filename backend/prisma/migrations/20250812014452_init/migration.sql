-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketList" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BucketList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BucketListItem" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "bucketId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BucketListItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "BucketList" ADD CONSTRAINT "BucketList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketListItem" ADD CONSTRAINT "BucketListItem_bucketId_fkey" FOREIGN KEY ("bucketId") REFERENCES "BucketList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BucketListItem" ADD CONSTRAINT "BucketListItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
