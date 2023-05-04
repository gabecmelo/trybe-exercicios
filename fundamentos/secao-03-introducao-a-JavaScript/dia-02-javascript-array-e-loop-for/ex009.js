// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber'
let palavraInvertida = ''


for (c = 0;c < word.length; c += 1) {
  palavraInvertida += word[word.length - 1 - c]

} console.log(palavraInvertida);