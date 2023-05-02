/*
6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let peça = 'Peão'



switch (peça.toLowerCase()) {
  case 'peão':
    console.log('O peão se move para a frente e captura apenas na diagonal (pode se mover duas casas caso seja o seu primeiro movimento na partida).')
  break

  case 'torre':
    console.log('A torre se move na vertical ou horizontal em linha reta quantas casas forem necessárias.')
  break

  case 'cavalo':
    console.log('O cavalo se move em forma de L, duas casas para frente e uma para o lado (ou vice-versa).')
  break

  case 'bispo':
    console.log('O bispo se move nas diagonais quantas casas forem necessárias.')
  break

  case 'rainha':
    console.log('A rainha se move em qualquer direção, quantas casas forem necessárias.')
  break

  case 'rei':
    console.log('O rei se move em qualquer direção, porém apenas uma casa por vez.')
  break

  default:
    console.log('Não é uma peça válida.')
  break
}
