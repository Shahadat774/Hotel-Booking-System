/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `booking` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "booking" ADD COLUMN     "uuid" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "booking_uuid_key" ON "booking"("uuid");
