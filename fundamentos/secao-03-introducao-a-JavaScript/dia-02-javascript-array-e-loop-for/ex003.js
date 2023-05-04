/* Calcule e imprima a média aritmética dos valores contidos no array.
A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let soma = 0
for (pos in numbers) {
  soma += numbers[pos]
}

let media = soma / numbers.length
console.log(media)

// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

if (media > 20) {
  console.log('O valor da média aritmética é maior que 20')
} else {
  console.log('O valor da média aritmética é menor ou igual a 20')
}
