const teams = require('../../data/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.some((t) => t.id === id);
  if (team) {
    next();
  } else {
    res.status(404).send({ message: 'Time não encontrado' });
  }
};

module.exports = existingId;
