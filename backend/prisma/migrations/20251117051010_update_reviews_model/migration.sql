/*
  Warnings:

  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `comment` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Review` table. All the data in the column will be lost.
  - Added the required column `status` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
DROP COLUMN "comment",
DROP COLUMN "rating",
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Review_id_seq";
