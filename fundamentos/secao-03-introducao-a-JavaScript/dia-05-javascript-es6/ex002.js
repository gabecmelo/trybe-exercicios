const pessoa = {
  nome: 'Henri',
  idade: 20
}

/*  Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`

pessoa = {
nome: 'Luna',
idade: 19
}

Altere essa estrutura para corrigir o erro. */

pessoa.nome = 'Luna'
pessoa.idade = 19

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);