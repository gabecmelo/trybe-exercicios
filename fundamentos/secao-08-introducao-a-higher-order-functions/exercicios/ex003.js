const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// forEach

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`)); // não tem retorno.

// find

console.log(pessoas.find((pessoa) => pessoa.nome === 'Aline')); // retorna o primeiro elemento que satisfaz a condição passada.

// some

console.log(pessoas.some((pessoa) => pessoa.idade > 30)); // retorna boolean (caso satisfaça ou não a condição).

// every

console.log(pessoas.every((pessoa) => pessoa.idade > 30)); // retorna boolean (se todos os elementos satisfazem ou não a condição).

// sort

console.log(pessoas.sort((pessoa1, pessoa2) => pessoa1.idade - pessoa2.idade)); // retorna o array com os elementos ordenados de acordo com a necessidade entregue.

// map

console.log(pessoas.map((pessoa) => pessoa.nome)); // retorna um array com todos os retornos efetivados pela função callback.
