/*
9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.
*/

let n1 = 2
let n2 = 7
let n3 = 12

let modN1 = n1 % 2
let modN2 = n2 % 2
let modN3 = n3 % 2

let impar = false

if (modN1 !== 0 || modN2 !== 0 || modN3 !== 0) {
  impar = true
}

console.log(impar);