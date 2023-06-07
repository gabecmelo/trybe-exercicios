const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// filter

const maisDe30 = pessoas.filter((pessoa) => pessoa.idade > 30); // retorna um array de elementos com os que satisfazem a condição passada.
console.log(maisDe30);

// reduce

const somaDasIdades = pessoas.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0); // retorna o que quiser de acordo com o retorno da callback passada.
console.log(somaDasIdades);