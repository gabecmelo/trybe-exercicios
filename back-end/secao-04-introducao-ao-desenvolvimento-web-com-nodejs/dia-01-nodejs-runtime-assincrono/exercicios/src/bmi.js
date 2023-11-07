const readline = require('readline-sync')

const getInformations = () => {
  const weight = readline.question('Qual o seu peso? ');
  const height = readline.question('Qual a sua altura? (em metros) ');

  let newWeight;
  let newHeight;

  if (weight.includes(',') || height.includes(',')) {
    const convertedWeight = Number(weight.replace(',', '.'));
    const convertedHeight = Number(height.replace(',', '.'));

    newWeight = convertedWeight
    newHeight = convertedHeight
  } else {
    const convertedWeight = Number(weight)
    const convertedHeight = Number(height)

    newWeight = convertedWeight
    newHeight = convertedHeight
  }

  if (Number.isNaN(newWeight) || Number.isNaN(newHeight) || newHeight < 1 || newWeight < 1) {
    throw new Error('Você não inseriu um numero válido')
  }
  return [newWeight, newHeight]
}

const calcBMI = (weight, height) => {
  const bmi = weight / (height ** 2);

  if (bmi < 18.5) {
    return `${bmi.toFixed(2)}, Abaixo do peso (magreza)`
  }
  else if (bmi < 24.9) {
    return `${bmi.toFixed(2)}, Peso normal`
  }
  else if (bmi < 29.9) {
    return `${bmi.toFixed(2)}, Acima do peso (sobrepeso)`
  }
  else if (bmi < 34.9) {
    return `${bmi.toFixed(2)}, Obesidade grau I`
  }
  else if (bmi < 39.9) {
    return `${bmi.toFixed(2)}, Obesidade grau II`
  }
  else if (bmi > 39.9) {
    return `${bmi.toFixed(2)}, Obesidade graus III E IV`
  }
}

function main() {
  try {
    const [weight, height] = getInformations();
    const bmi = calcBMI(weight, height);
    console.log(`Peso: ${weight}, Altura: ${height}`);
    console.log('Seu índice de massa corporal é:', bmi);
  } catch (e) {
    console.log('[ERRO]:', e.message)
  }
}

main();