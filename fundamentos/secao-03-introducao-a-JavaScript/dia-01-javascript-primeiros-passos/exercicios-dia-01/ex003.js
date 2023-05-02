/*
3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
*/

let n1 = 5
let n2 = 10
let n3 = 15

if (n1 > n2 && n1 > n3) {
  console.log (`${n1} é o maior número`)
} else if (n2 > n1 && n2 > n3) {
  console.log (`${n2} é o maior número`)
} else {
  console.log (`${n3} é o maior número`)
}