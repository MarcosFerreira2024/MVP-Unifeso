/*
  Warnings:

  - You are about to drop the column `local` on the `Outings` table. All the data in the column will be lost.
  - Added the required column `locationId` to the `Outings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "cityId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Location_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Outings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "mainPhoto" TEXT NOT NULL,
    "photos" JSONB NOT NULL,
    "category" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    "public" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "startHour" DATETIME NOT NULL,
    "endHour" DATETIME NOT NULL,
    "slug" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    CONSTRAINT "Outings_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Outings_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Outings" ("category", "categoryId", "content", "createdAt", "endDate", "endHour", "id", "mainPhoto", "photos", "price", "public", "slug", "startDate", "startHour", "status", "title", "updatedAt") SELECT "category", "categoryId", "content", "createdAt", "endDate", "endHour", "id", "mainPhoto", "photos", "price", "public", "slug", "startDate", "startHour", "status", "title", "updatedAt" FROM "Outings";
DROP TABLE "Outings";
ALTER TABLE "new_Outings" RENAME TO "Outings";
CREATE UNIQUE INDEX "Outings_slug_key" ON "Outings"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");
