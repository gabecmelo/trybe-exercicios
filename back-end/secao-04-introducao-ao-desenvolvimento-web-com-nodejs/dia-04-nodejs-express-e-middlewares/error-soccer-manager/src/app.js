const express = require('express');
const routers = require('./routes');

const app = express();

app.use(express.json());

app.use(routers);

app.use((error, _req, res, _next) => {
  res
    .status(500)
    .json({ error: `Algo deu errado! Mensagem: ${error.message}` });
});

module.exports = app;
