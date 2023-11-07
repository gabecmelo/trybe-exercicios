const fs = require('fs/promises');
const path = require('path');

const readChocolate = async () => {
  const chocolatePath = path.resolve(__dirname, '../data/chocolates.json');

  try {
    const data = await fs.readFile(chocolatePath, 'utf-8');
    const chocolates = JSON.parse(data);
    return chocolates;
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const chocolates = await readChocolate();
  return chocolates.chocolates;
};

module.exports = {
  getAllChocolates,
};
