// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let numbers = [];

for (c = 1;c <= 25; c += 1 ) {
  numbers.push(c)
}

console.log(numbers)

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


for (pos in numbers) {
  let divisão = (numbers[pos] / 2)
  console.log(divisão)
}
