/*
  Warnings:

  - Added the required column `designation` to the `providers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_providers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "designation" TEXT NOT NULL,
    "avatar_url" TEXT,
    "email_address" TEXT NOT NULL,
    "given_name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "gender_id" TEXT NOT NULL,
    CONSTRAINT "providers_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "genders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_providers" ("avatar_url", "created_at", "email_address", "gender_id", "given_name", "id", "surname", "updated_at") SELECT "avatar_url", "created_at", "email_address", "gender_id", "given_name", "id", "surname", "updated_at" FROM "providers";
DROP TABLE "providers";
ALTER TABLE "new_providers" RENAME TO "providers";
CREATE UNIQUE INDEX "providers_email_address_key" ON "providers"("email_address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
