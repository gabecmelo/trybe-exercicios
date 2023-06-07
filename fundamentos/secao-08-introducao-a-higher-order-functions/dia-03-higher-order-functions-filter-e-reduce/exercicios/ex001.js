// Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.
// reduce e filter:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = (number) => number % 2 === 0;

const soma = (soma, valorAtual) => soma + valorAtual;

const somaPares = (array) => array.filter(numerosPares).reduce(soma)

console.log(`A soma dos pares é: ${somaPares(numbers)}.`);

// apenas com reduce:

const somaReduce = (soma, valorAtual) => valorAtual % 2 === 0 ? soma + valorAtual : soma;

const somaPares2 = (array) => array.reduce(somaReduce);

console.log(`A soma dos pares apenas com reduce é: ${somaPares2(numbers)}.`);