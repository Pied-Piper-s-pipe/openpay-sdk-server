/*
  Warnings:

  - You are about to drop the column `balance` on the `user_balance_histories` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `user_balance_histories` table. All the data in the column will be lost.
  - You are about to drop the column `token_id` on the `user_balance_histories` table. All the data in the column will be lost.
  - You are about to drop the column `wallet_type` on the `user_balance_histories` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_balance_histories" DROP CONSTRAINT "user_balance_histories_token_id_fkey";

-- AlterTable
ALTER TABLE "user_balance_histories" DROP COLUMN "balance",
DROP COLUMN "price",
DROP COLUMN "token_id",
DROP COLUMN "wallet_type",
ADD COLUMN     "tokenId" TEXT;

-- AddForeignKey
ALTER TABLE "user_balance_histories" ADD CONSTRAINT "user_balance_histories_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "tokens"("id") ON DELETE SET NULL ON UPDATE CASCADE;
