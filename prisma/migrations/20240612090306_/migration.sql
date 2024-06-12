/*
  Warnings:

  - Changed the type of `created_at` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updated_at` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `created_at`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    DROP COLUMN `updated_at`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
