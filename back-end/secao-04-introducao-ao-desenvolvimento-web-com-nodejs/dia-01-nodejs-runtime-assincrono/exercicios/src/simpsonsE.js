const fs = require('fs/promises');
const path = require('path');

const PATH_SIMPSONS = '../utils/simpsons.json'
const PATH_SIMPSONS_FAMILY = '../utils/simpsonsFamily.json'

const getData = async (dirname) => {
  const jsonPath = path.resolve(__dirname, dirname);
  const data = await fs.readFile(jsonPath);
  const simpsons = JSON.parse(data);
  return simpsons;
};

const writeData = async (characterName, pathname) => {
  const data = await getData(PATH_SIMPSONS);
  const family = await getData(PATH_SIMPSONS_FAMILY);

  const newCharacter = data.find((simpson) => simpson.name == characterName);
  const newData = [...family, newCharacter];

  const jsonPath = path.resolve(__dirname, PATH_SIMPSONS_FAMILY);
  await fs.writeFile(jsonPath, JSON.stringify(newData));

  console.log(`Personagem '${characterName}' com sucesso em '${pathname}'`);
};

async function main() {
  try {
    writeData('Nelson Muntz', PATH_SIMPSONS_FAMILY);
  } catch (e) {
    console.log('[ERRO]:', e.message);
  };
};

main();
