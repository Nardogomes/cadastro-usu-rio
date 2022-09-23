-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "CPF" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "RG" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "nome_mae" TEXT NOT NULL,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("CPF", "RG", "data_cadastro", "data_nascimento", "nome", "nome_mae") SELECT "CPF", "RG", "data_cadastro", "data_nascimento", "nome", "nome_mae" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
