// Utilizando for, descubra o menor valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0]
for (pos in numbers) {
  if (menorNumero > numbers[pos]) {
    menorNumero = numbers[pos]
  }
}

console.log(menorNumero)