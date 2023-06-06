const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((elemento) => elemento === name);
}

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));