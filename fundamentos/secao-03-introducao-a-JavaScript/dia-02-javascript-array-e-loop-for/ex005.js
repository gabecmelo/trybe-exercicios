// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let ímpares = 0
for (pos in numbers) {
  if (numbers[pos] % 2 !== 0) {
    ímpares += 1
  }
}

if (ímpares === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(`${ímpares} valores ímpares encontrados`)
}
