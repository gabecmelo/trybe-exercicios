const readline = require('readline-sync')

const nome = readline.question('Qual é o seu nome? ')
const idade = readline.questionInt('Qual a sua idade? ')

console.log(`Seu nome é ${nome} e você tem ${idade} anos`);
