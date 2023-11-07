const fs = require('fs/promises');
const path = require('path');

const getData = async () => {
  const jsonPath = path.resolve(__dirname, '../utils/simpsons.json');
  const data = await fs.readFile(jsonPath);
  const simpsons = JSON.parse(data);
  return simpsons;
};

const filterData = async (start, end) => {
  const data = await getData();
  const newData = data.slice(start, end);
  return newData;
};

const writeData = async(data) => {
  const jsonPath = path.resolve(__dirname, '../utils/simpsonsFamily.json');
  await fs.writeFile(jsonPath, JSON.stringify(data));
};

async function main() {
  try {
    const data = await filterData(0, 4);
    writeData(data);
    console.log('Família cadastrada com sucesso!');
  } catch (e) {
    console.log('[ERRO]:', e)
  }
};

main();
