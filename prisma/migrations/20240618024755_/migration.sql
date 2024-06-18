/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `name`,
    ADD COLUMN `disabled` TINYINT NOT NULL DEFAULT 0,
    ADD COLUMN `username` VARCHAR(32) NOT NULL,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `email` VARCHAR(64) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `vip` (
    `user_id` INTEGER NOT NULL,
    `vip_type_id` INTEGER NOT NULL,
    `start_time` DATETIME(0) NOT NULL,
    `expire_time` DATETIME(0) NULL,

    UNIQUE INDEX `vip_user_id_uindex`(`user_id`),
    INDEX `vip_vip_type_id_index`(`vip_type_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vip_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tilte` VARCHAR(64) NOT NULL,
    `description` VARCHAR(512) NOT NULL,
    `equity` JSON NULL,
    `price` DECIMAL(10, 0) NOT NULL,
    `original_price` DECIMAL(10, 0) NULL,
    `duration` INTEGER NOT NULL,
    `sell_type` INTEGER NOT NULL DEFAULT 0,
    `disabled` TINYINT NOT NULL DEFAULT 0,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vip_exchange_code` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(32) NOT NULL,
    `vip_type_id` INTEGER NOT NULL,
    `start_time` DATETIME(0) NOT NULL,
    `expire_time` DATETIME(0) NOT NULL,
    `creator_id` INTEGER NOT NULL,
    `exchanged` TINYINT NOT NULL DEFAULT 0,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `vip_exchange_code_id_index`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invite_code` (
    `code` VARCHAR(32) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `expire_time` DATETIME(0) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `code`(`code`),
    INDEX `invite_code_user_id_index`(`user_id`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invite_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `invite_code` VARCHAR(32) NOT NULL,
    `initiator_id` INTEGER NOT NULL,
    `receiver_id` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `invite_user_initiator_id_index`(`initiator_id`),
    INDEX `invite_user_invite_code_index`(`invite_code`),
    INDEX `invite_user_receiver_id_index`(`receiver_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resume` (
    `id` INTEGER NOT NULL,
    `title` VARCHAR(64) NOT NULL,
    `content` JSON NOT NULL,
    `user_id` INTEGER NOT NULL,
    `template_id` INTEGER NULL,
    `theme_color` VARCHAR(10) NOT NULL,
    `is_public` TINYINT NOT NULL DEFAULT 0,
    `export_count` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `resume_template_id_index`(`template_id`),
    INDEX `resume_user_id_index`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resume_template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(32) NOT NULL,
    `title` VARCHAR(64) NOT NULL,
    `content` JSON NOT NULL,
    `header_img` VARCHAR(128) NULL,
    `creator_id` INTEGER NOT NULL,
    `use_count` INTEGER NOT NULL DEFAULT 0,
    `is_vip` TINYINT NOT NULL DEFAULT 0,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `code`(`code`),
    INDEX `resume_template_creator_id_index`(`creator_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` VARCHAR(32) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `price` DECIMAL(10, 0) NOT NULL,
    `pay_type` INTEGER NULL,
    `order_status` INTEGER NOT NULL DEFAULT 0,
    `order_desc` VARCHAR(512) NULL,
    `overtime` DATETIME(0) NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `id` ON `user`(`id`);
