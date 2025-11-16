/*
  Warnings:

  - Added the required column `category` to the `Stylist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stylist" ADD COLUMN     "category" TEXT NOT NULL;
