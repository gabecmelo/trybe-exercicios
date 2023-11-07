const fs = require('fs/promises');
const path = require('path');

const getSimpsonsData = async () => {
  const data = await fs.readFile(path.resolve(__dirname, '../utils/simpsons.json'));
  const simpsons = JSON.parse(data);
  return simpsons;
}

const deleteCharacters = async (...ids) => {
  const data = await getSimpsonsData();
  const newData = data.filter((character) => !ids.some(id => character.id.includes(id)))
  return newData
}

async function main() {
  try {
    const newData = await deleteCharacters(10, 6);
    const jsonPath = path.resolve(__dirname, '../utils/simpsons.json');
    await fs.writeFile(jsonPath, JSON.stringify(newData));
    console.log('Arquivo cadastrado com sucesso!');
  } catch (e) {
    console.log('[ERRO]:', e.message);
  }
}

main();
