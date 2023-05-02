/*
5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
*/

let n1 = 90
let n2 = 40
let n3 = 50

let soma = n1 + n2 + n3

if (soma === 180) {
  console.log(`A soma dos ângulos é de ${soma}, portanto temos um triângulo`);
} else {
  console.log(`A soma dos ângulos é de ${soma}, portanto não temos um triângulo`);
}