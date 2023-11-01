const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    const data2 = await fs.readFile('./meu-arquivo2.txt', 'utf-8');
    console.log(data);
    console.log(data2);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()