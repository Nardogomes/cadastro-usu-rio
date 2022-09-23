import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

const PORT = 3333;

app.get("/users", async (request, response) => {
  const users = await prisma.user.findMany();

  return response.json({ users });
});

app.get("/users/:id", (request, response) => {
  // const userId = request.params.id;

  return response.json({
    message: "Usuário",
  });
});

app.post("/users", (request, response) => {
  return response.status(201).json({
    message: "Usuário salvo.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
