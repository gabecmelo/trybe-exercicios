// Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, age) => {
  return arr.every((elemento) => elemento.age >= age );
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));