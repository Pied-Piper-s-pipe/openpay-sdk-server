-- CreateTable
CREATE TABLE "chains" (
    "id" TEXT NOT NULL,
    "chain_id" TEXT NOT NULL DEFAULT '',
    "wallet_type" INTEGER NOT NULL,
    "chain_name" TEXT NOT NULL DEFAULT '',
    "chain_icon" TEXT NOT NULL DEFAULT '',
    "status_type" INTEGER NOT NULL DEFAULT 1,
    "sort" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nodes" (
    "id" TEXT NOT NULL,
    "chain_id" TEXT NOT NULL DEFAULT '',
    "node_url" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "chain_id" TEXT NOT NULL DEFAULT '',
    "token_symbol" TEXT NOT NULL DEFAULT '',
    "token_name" TEXT NOT NULL DEFAULT '',
    "token_icon" TEXT NOT NULL DEFAULT '',
    "contract_address" TEXT NOT NULL DEFAULT '',
    "token_decimals" INTEGER NOT NULL,
    "is_native" BOOLEAN NOT NULL DEFAULT false,
    "is_multiple_chain" BOOLEAN NOT NULL DEFAULT false,
    "coin_market_cap_id" INTEGER NOT NULL,
    "default_subscribe" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token_subscribes" (
    "id" SERIAL NOT NULL,
    "token_ids" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_subscribes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chains_chain_id_key" ON "chains"("chain_id");

-- CreateIndex
CREATE UNIQUE INDEX "chains_wallet_type_key" ON "chains"("wallet_type");

-- CreateIndex
CREATE UNIQUE INDEX "token_subscribes_address_key" ON "token_subscribes"("address");

-- AddForeignKey
ALTER TABLE "nodes" ADD CONSTRAINT "nodes_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
