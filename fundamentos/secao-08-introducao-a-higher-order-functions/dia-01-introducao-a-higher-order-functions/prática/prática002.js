const draftNumber = (bettedNumber) => {
  const draftedNumber = Math.floor(Math.random() * 5) + 1
  console.log(`Número sorteado: ${draftedNumber}`);
  console.log(`Número apostado: ${bettedNumber}`);

  return draftedNumber === bettedNumber ? 'Parabéns, você ganhou!' : 'Tente novamente'

};


console.log(draftNumber(5));
