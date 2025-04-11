/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customorder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `customorder` DROP FOREIGN KEY `CustomOrder_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orderitem` DROP FOREIGN KEY `OrderItem_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `Subscription_user_id_fkey`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `address`,
    DROP COLUMN `created_at`,
    DROP COLUMN `password`,
    DROP COLUMN `phone`,
    DROP COLUMN `user_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `cart`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `customorder`;

-- DropTable
DROP TABLE `order`;

-- DropTable
DROP TABLE `orderitem`;

-- DropTable
DROP TABLE `product`;

-- DropTable
DROP TABLE `subscription`;
