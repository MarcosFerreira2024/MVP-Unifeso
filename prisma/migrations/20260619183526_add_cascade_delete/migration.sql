-- DropForeignKey
ALTER TABLE "public"."Ratings" DROP CONSTRAINT "Ratings_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VerificationCodes" DROP CONSTRAINT "VerificationCodes_userId_fkey";

-- AddForeignKey
ALTER TABLE "VerificationCodes" ADD CONSTRAINT "VerificationCodes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
