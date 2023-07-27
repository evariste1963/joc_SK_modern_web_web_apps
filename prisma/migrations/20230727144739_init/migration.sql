-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "user_Id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "slug" TEXT NOT NULL,
    "reactions" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Post" ("content", "createAt", "id", "published", "reactions", "slug", "title", "updatedAt", "user_Id") SELECT "content", "createAt", "id", "published", "reactions", "slug", "title", "updatedAt", "user_Id" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
