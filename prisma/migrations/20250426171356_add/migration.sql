-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('super_admin', 'admin', 'user') NOT NULL DEFAULT 'user';
