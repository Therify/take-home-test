-- CreateTable
CREATE TABLE "providers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email_address" TEXT NOT NULL,
    "given_name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "gender_id" TEXT NOT NULL,
    CONSTRAINT "providers_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "genders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "provider_ethnicities" (
    "ethnicity_id" TEXT NOT NULL,
    "provider_id" INTEGER NOT NULL,

    PRIMARY KEY ("ethnicity_id", "provider_id"),
    CONSTRAINT "provider_ethnicities_ethnicity_id_fkey" FOREIGN KEY ("ethnicity_id") REFERENCES "ethnicities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "provider_ethnicities_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "providers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "provider_specialties" (
    "concern_id" TEXT NOT NULL,
    "provider_id" INTEGER NOT NULL,

    PRIMARY KEY ("concern_id", "provider_id"),
    CONSTRAINT "provider_specialties_concern_id_fkey" FOREIGN KEY ("concern_id") REFERENCES "concerns" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "provider_specialties_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "providers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "provider_credentials" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "provider_id" INTEGER NOT NULL,
    "state_id" TEXT NOT NULL,
    CONSTRAINT "provider_credentials_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "providers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "provider_credentials_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "states" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "provider_credential_insurance_panels" (
    "provider_credential_id" INTEGER NOT NULL,
    "insurance_provider_id" TEXT NOT NULL,

    PRIMARY KEY ("provider_credential_id", "insurance_provider_id"),
    CONSTRAINT "provider_credential_insurance_panels_provider_credential_id_fkey" FOREIGN KEY ("provider_credential_id") REFERENCES "provider_credentials" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "provider_credential_insurance_panels_insurance_provider_id_fkey" FOREIGN KEY ("insurance_provider_id") REFERENCES "insurance_providers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "genders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ethnicities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "concerns" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "insurance_providers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "states" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "providers_email_address_key" ON "providers"("email_address");
