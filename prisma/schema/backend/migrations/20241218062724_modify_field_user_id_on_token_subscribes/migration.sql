/*
  Warnings:

  - You are about to drop the column `address` on the `token_subscribes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `token_subscribes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `token_subscribes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "token_subscribes_address_key";

-- AlterTable
ALTER TABLE "token_subscribes" DROP COLUMN "address",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "token_subscribes_user_id_key" ON "token_subscribes"("user_id");
