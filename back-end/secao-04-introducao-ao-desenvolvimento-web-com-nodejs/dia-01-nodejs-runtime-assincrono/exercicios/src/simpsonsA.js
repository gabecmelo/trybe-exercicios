const fs = require('fs/promises');
const path = require('path');

const getSimpsonsData = async () => {
    const data = await fs.readFile(path.resolve(__dirname, '../utils/simpsons.json'));
    const simpsons = JSON.parse(data);
    return simpsons;
};

const listData = (array) => {
  const list = array.map((obj) => {
    return `${obj.id} - ${obj.name}`
  })
  return list;
};

const printListElements = (elements) => {
  elements.forEach((element) => {
    console.log(element);
  });
};

async function main() {
  try {
    const data = await getSimpsonsData();
    const list = listData(data);
    printListElements(list);
  } catch (e) {
    console.log('[ERRO]:', e.message);
  };
};

main();
