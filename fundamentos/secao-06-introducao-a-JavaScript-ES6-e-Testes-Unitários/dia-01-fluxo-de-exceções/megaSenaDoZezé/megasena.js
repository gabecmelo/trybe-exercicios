// Jogo do Neidson
let studentGame = [18, 26, 35, 50, 12];

// Jogo sorteado
let megaSenaNumbers = [];

const verificaNumero = (numero) => {
  if (isNaN(numero)) {
    throw new Error ('Número inválido. Digite um número')
  }
}

const verificaGame = (game) => {
  if (game.length < 6) {
    throw new Error ('Erro: Você não pode jogar com menos do que 6 números!')
  }
}

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  megaSenaNumbers.push(randomNumber);
}

// Confere o jogo
function megaSenaChecker (game) {
  try {
    verificaGame(game)
    let numberOfHits = 0;
    for (let index = 0; index < megaSenaNumbers.length; index += 1) {
      let drawnNumber = megaSenaNumbers[index];
      
      for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
        verificaNumero(game[gameIndex])
        let studentNumber = game[gameIndex];     
        if (drawnNumber === studentNumber) {
          numberOfHits += 1;
        }
      }
    }
    return numberOfHits;     
  } catch (error) {
    return error.message
  }
}

console.log("Jogo sorteado", megaSenaNumbers);
console.log("Jogo da pessoa:", studentGame);
console.log("Número de acertos:", megaSenaChecker(studentGame));
