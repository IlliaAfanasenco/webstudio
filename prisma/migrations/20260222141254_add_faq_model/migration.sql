/*
  Warnings:

  - You are about to drop the column `resault` on the `Project` table. All the data in the column will be lost.
  - Added the required column `result` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Faq" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "previewUrl" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "realized" JSONB NOT NULL,
    "technology" JSONB NOT NULL,
    "result" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Project" ("createdAt", "id", "isActive", "order", "previewUrl", "realized", "short", "slug", "task", "technology", "title", "updatedAt", "url") SELECT "createdAt", "id", "isActive", "order", "previewUrl", "realized", "short", "slug", "task", "technology", "title", "updatedAt", "url" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE INDEX "Project_isActive_idx" ON "Project"("isActive");
CREATE INDEX "Project_createdAt_idx" ON "Project"("createdAt");
CREATE INDEX "Project_order_idx" ON "Project"("order");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "Faq_isActive_idx" ON "Faq"("isActive");

-- CreateIndex
CREATE INDEX "Faq_createdAt_idx" ON "Faq"("createdAt");

-- CreateIndex
CREATE INDEX "Faq_order_idx" ON "Faq"("order");
