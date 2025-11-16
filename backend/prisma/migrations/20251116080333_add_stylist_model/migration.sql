-- CreateTable
CREATE TABLE "Stylist" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stylist_pkey" PRIMARY KEY ("id")
);
