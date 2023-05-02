/*
8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
*/

let n1 = 5
let n2 = 12
let n3 = 7

let modN1 = n1 % 2
let modN2 = n2 % 2
let modN3 = n3 % 2

let par = false

if (modN1 === 0 || modN2 === 0 || modN3 === 0) {
  par = true
}

console.log(par)