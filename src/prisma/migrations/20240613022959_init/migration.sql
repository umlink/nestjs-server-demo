/*
  Warnings:

  - Changed the type of `created_at` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updated_at` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `created_at`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    DROP COLUMN `updated_at`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
