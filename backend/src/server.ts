import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

const PORT = 3333;

app.get("/users", async (request, response) => {
  const users = await prisma.user.findMany();

  return response.json({ users });
});

app.get("/users/:id", async (request, response) => {
  const userId = request.params.id;

  const user = await prisma.user.findMany({
    where: {
      CPF: userId,
    }
  })

  return response.json({ user });
});

app.post("/users", async (request, response) => {
  const body = request.body;

  const dataNascimentoFormated = new Date(body.data_nascimento).toISOString();

  const user = await prisma.user.create({
    data: {
      CPF: body.CPF,
      nome: body.nome,
      RG: body.RG,
      data_nascimento: dataNascimentoFormated,
      nome_mae: body.nome_mae,
      data_cadastro: body.data_cadastro
    }
  })

  return response.status(201).json(user);
});

app.delete("/users/:id", async (request, response) => {
  const userId = request.params.id;

  const user = await prisma.user.delete({
    where: {
      CPF: userId
    }
  })

  return response.json({ user });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
