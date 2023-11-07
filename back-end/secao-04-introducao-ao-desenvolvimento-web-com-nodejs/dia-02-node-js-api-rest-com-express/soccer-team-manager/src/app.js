const express = require('express');
const teams = require('../utils/teams');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const findTeam = teams.find((team) => team.id === Number(id));

  res.status(200).json({ findTeam });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };

  const verifyTeam = teams.some((team) =>
    team.id == newTeam.id || team.initials == newTeam.initials || team.name == newTeam.name);
  if (verifyTeam) {
    console.log('Alguma das informações já existe!');
  } else {
    teams.push(newTeam);
    console.log('Novo time cadastrado com sucesso!');
  }

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Time não encontrado' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;

  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  teams.splice(arrayPosition, 1);
  console.log('Time deletado com sucesso!');
  res.status(200).end();
});

module.exports = {app};
