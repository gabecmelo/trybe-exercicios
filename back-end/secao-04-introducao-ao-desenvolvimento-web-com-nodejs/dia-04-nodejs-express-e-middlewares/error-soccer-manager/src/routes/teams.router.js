const express = require('express');
const { readTeamsData } = require('../../utils/fsUtils');

const teamsRouter = express.Router();

teamsRouter.get('/teams', async (_req, res, next) => {
  try {
    const teams = await readTeamsData();
    return res.status(200).json({ teams });
  } catch (error) {
    next(error);
  }
});

teamsRouter.patch('/teams', async (_req, res) => {
  res
    .status(200)
    .send({ message: '/PATCH enviado com sucesso para a aba /teams' });
});

teamsRouter.delete('/teams', async (_req, res) => {
  res
    .status(200)
    .send({ message: '/DELETE enviado com sucesso para a aba /teams' });
});

module.exports = teamsRouter;
