// Utilizando for, descubra o maior valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0]
for (pos in numbers) {
  if (maiorNumero < numbers[pos]) {
    maiorNumero = numbers[pos]
  }
}

console.log(maiorNumero)