/*
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !

4! = 4 x 3 x 2 x 1 = 24

4! = 4 * (4 - 1)

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. 
*/

let fat = 10
let res = 1

for (n = fat;n > 0; n -= 1) {
  res *= n
}

console.log(`O resultado do fatorial de ${fat} é ${res}`)
