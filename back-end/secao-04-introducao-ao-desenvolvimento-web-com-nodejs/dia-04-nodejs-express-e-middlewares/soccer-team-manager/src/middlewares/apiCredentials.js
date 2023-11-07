const fs = require('fs/promises');
const path = require('path');

const apiCredentials = async (req, res, next) => {
  const token = req.header('X-API-TOKEN');
  const authPath = path.resolve(__dirname, '../../data/authdata.json');
  const authdata = await fs.readFile(authPath, 'utf-8');
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    req.authTeams = authorized[token];
    next();
  } else {
    res.status(401).send({ message: 'token não autorizado' });
  }
};

module.exports = apiCredentials;
