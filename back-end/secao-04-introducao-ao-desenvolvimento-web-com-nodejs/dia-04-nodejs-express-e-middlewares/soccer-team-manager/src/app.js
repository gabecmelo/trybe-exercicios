require('express-async-errors');
const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('../data/teams');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
//const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: 'Muitas requisições originadas deste IP',
});

app.use(limiter);
app.use(express.json());
//app.use(apiCredentials);
app.use(morgan('dev'));
app.use(cors());

let nextId = 3;

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    req.authTeams.teams.includes(req.body.sigla) &&
    teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  } else {
    res
      .status(422)
      .send({ message: 'Já existe um time com essa sigla ou sem permissao' });
  }
});

app.put('/teams/:id', validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => Number(t.id) === id);

  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);

  res.status(204);
});

app.use((req, res) =>
  res
    .status(404)
    .send({ message: 'Infelizmente, essa rota não existe amigão, ERRO 404' })
);

module.exports = app;
