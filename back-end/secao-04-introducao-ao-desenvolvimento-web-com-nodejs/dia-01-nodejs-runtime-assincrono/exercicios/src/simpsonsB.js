const fs = require('fs/promises');
const path = require('path');

const getSimpsonsData = async () => {
  const data = await fs.readFile(path.resolve(__dirname, '../utils/simpsons.json'));
  const simpsons = JSON.parse(data);
  return simpsons;
}

const getCharacterInfos = async(id) => {
  const data = await getSimpsonsData();
  const promise = new Promise((resolve, reject) => {
    const response = data.find((character) => id == character.id)
    resolve(response);
  });

  return promise;
};

async function main() {
  try {
    const characterInfo = await getCharacterInfos(5);
    console.log(characterInfo);
  } catch (e) {
    console.log('[ERRO]:', e.message);
  }
}

main();
