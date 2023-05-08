// Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()