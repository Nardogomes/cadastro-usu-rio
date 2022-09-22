import express from 'express';

const app = express();

const PORT = 3333;

app.get('/users', (request, response) => {
  return response.json({
    "message": "Usuários"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
