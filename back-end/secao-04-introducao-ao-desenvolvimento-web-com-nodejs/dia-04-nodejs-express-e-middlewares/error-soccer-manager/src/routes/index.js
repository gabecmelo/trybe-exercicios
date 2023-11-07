const express = require('express');
const teamsRouter = require('./teams.router');
const testesRouter = require('./teste.router');

const routers = express.Router();

routers.use(teamsRouter);
routers.use(testesRouter);

module.exports = routers;
