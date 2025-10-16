/*
  Warnings:

  - Added the required column `validUntil` to the `VerificationCodes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VerificationCodes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "validUntil" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VerificationCodes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VerificationCodes" ("code", "createdAt", "id", "updatedAt", "used", "userId") SELECT "code", "createdAt", "id", "updatedAt", "used", "userId" FROM "VerificationCodes";
DROP TABLE "VerificationCodes";
ALTER TABLE "new_VerificationCodes" RENAME TO "VerificationCodes";
CREATE UNIQUE INDEX "VerificationCodes_code_key" ON "VerificationCodes"("code");
CREATE UNIQUE INDEX "VerificationCodes_userId_key" ON "VerificationCodes"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
