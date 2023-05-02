/*
7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

let nota = 69

if (nota < 0 || nota > 100) {
  nota = 'Nota inválida'
} else if (nota >= 90) {
  nota = 'A'
} else if (nota >= 80) {
  nota = 'B'
} else if (nota >= 70) {
  nota = 'C'
} else if (nota >= 60) {
  nota = 'D'
} else if (nota >= 50) {
  nota = 'E'
} else if (nota < 50) {
  nota = 'F'
}

console.log(nota)