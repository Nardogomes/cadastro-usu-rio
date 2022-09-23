-- CreateTable
CREATE TABLE "User" (
    "CPF" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "RG" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "nome_mae" TEXT NOT NULL,
    "data_cadastro" DATETIME NOT NULL
);
