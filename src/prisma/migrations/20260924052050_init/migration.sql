-- CreateEnum
CREATE TYPE "bookingstatus" AS ENUM ('pending', 'comfirmed', 'cencelled');

-- CreateTable
CREATE TABLE "booking" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "hotelid" INTEGER NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "bookingAmount" INTEGER NOT NULL,
    "status" "bookingstatus" NOT NULL,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);
