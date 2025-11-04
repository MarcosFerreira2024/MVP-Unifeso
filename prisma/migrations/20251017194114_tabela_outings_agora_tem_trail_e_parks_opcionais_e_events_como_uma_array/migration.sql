/*
  Warnings:

  - You are about to drop the `CategoryType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `typeId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outingId` to the `Park` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outingId` to the `Trail` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CategoryType_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoryType";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Category" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "outingId" TEXT NOT NULL,
    "maximumCapacity" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Event_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Event" ("createdAt", "id", "maximumCapacity", "outingId", "updatedAt") SELECT "createdAt", "id", "maximumCapacity", "outingId", "updatedAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
CREATE TABLE "new_Park" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "outingId" TEXT NOT NULL,
    "infrastructure" TEXT NOT NULL,
    "biodiversity" TEXT NOT NULL,
    "maximumCapacity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Park_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Park" ("biodiversity", "createdAt", "id", "infrastructure", "maximumCapacity", "updatedAt") SELECT "biodiversity", "createdAt", "id", "infrastructure", "maximumCapacity", "updatedAt" FROM "Park";
DROP TABLE "Park";
ALTER TABLE "new_Park" RENAME TO "Park";
CREATE UNIQUE INDEX "Park_outingId_key" ON "Park"("outingId");
CREATE TABLE "new_Trail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "outingId" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "distance" REAL NOT NULL,
    "roundTrip" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Trail_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Trail" ("createdAt", "difficulty", "distance", "duration", "id", "roundTrip", "updatedAt") SELECT "createdAt", "difficulty", "distance", "duration", "id", "roundTrip", "updatedAt" FROM "Trail";
DROP TABLE "Trail";
ALTER TABLE "new_Trail" RENAME TO "Trail";
CREATE UNIQUE INDEX "Trail_outingId_key" ON "Trail"("outingId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
