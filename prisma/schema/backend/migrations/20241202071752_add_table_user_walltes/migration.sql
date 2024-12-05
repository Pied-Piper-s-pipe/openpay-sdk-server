-- CreateTable
CREATE TABLE "user_wallets" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL,
    "wallet_type" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_balance_histories" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL DEFAULT '',
    "balance" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "assert" TEXT NOT NULL,
    "token_id" TEXT NOT NULL,
    "wallet_type" INTEGER NOT NULL,
    "count_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_balance_histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_wallets_address_wallet_type_key" ON "user_wallets"("address", "wallet_type");

-- AddForeignKey
ALTER TABLE "user_balance_histories" ADD CONSTRAINT "user_balance_histories_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "tokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
