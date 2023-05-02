let pessoa = 'aprovada'
let resultado = '?'

switch (pessoa) {
  case 'aprovada':
    resultado = 'Parabéns, você está no grupo de pessoas aprovadas!'
    break
  case 'lista':
    resultado = 'Você está na nossa lista de espera.'
    break
  case 'reprovada':
    resultado = 'Infelizmente, você reprovou.'
    break
  default:
    resultado = 'Informação incorreta'
    break
}

console.log(resultado)