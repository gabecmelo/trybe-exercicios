const express = require('express');

const testeRouter = express.Router();

testeRouter.get('/testes', (_req, res) => {
  res
    .status(200)
    .send({ message: 'Aba de testes carregada com sucesso! /GET' });
});

testeRouter.post('/testes', (_req, res) => {
  res
    .status(200)
    .send({ message: 'Aba de testes carregada com sucesso! /POST' });
});

testeRouter.put('/testes', (_req, res) => {
  res
    .status(200)
    .send({ message: 'Aba de testes carregada com sucesso! /PUT' });
});

module.exports = testeRouter;
