-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_outingId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OpenHour" DROP CONSTRAINT "OpenHour_outingId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Park" DROP CONSTRAINT "Park_outingId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Photo" DROP CONSTRAINT "Photo_outingId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Ratings" DROP CONSTRAINT "Ratings_outingId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Trail" DROP CONSTRAINT "Trail_outingId_fkey";

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpenHour" ADD CONSTRAINT "OpenHour_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
