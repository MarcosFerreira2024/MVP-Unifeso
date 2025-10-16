/*
  Warnings:

  - You are about to alter the column `rating` on the `Ratings` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ratings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "comment" TEXT,
    "rating" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "outingId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ratings_outingId_fkey" FOREIGN KEY ("outingId") REFERENCES "Outings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ratings" ("comment", "createdAt", "id", "outingId", "rating", "updatedAt", "userId") SELECT "comment", "createdAt", "id", "outingId", "rating", "updatedAt", "userId" FROM "Ratings";
DROP TABLE "Ratings";
ALTER TABLE "new_Ratings" RENAME TO "Ratings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
