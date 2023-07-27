/*
  Warnings:

  - You are about to drop the column `reactions` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `Post` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "slug" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Post" ("content", "createAt", "id", "published", "slug", "title", "updatedAt") SELECT "content", "createAt", "id", "published", "slug", "title", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
