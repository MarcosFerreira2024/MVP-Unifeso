/*
  Warnings:

  - A unique constraint covering the columns `[outingId]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Event_outingId_key" ON "Event"("outingId");
