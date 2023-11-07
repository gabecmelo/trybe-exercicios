const fs = require('fs/promises');
const path = require('path');

const readTeamsData = async () => {
  const dataPath = path.resolve(__dirname, '../data/teams.json');
  const data = await fs.readFile(dataPath, 'utf-8');
  const teams = JSON.parse(data);

  return teams;
};

module.exports = { readTeamsData };
