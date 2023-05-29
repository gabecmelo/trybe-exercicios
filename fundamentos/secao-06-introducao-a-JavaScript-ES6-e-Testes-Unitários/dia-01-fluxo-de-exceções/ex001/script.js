// Primeira parte
const promo = [
  { product: 'bola de beach tennis', price: 29.99 },
  { product: 'mochila de trilha 20 litros', price: 120.99 },
  { product: 'capacete de ciclista', price: 180.59 },
  { product: 'toalha compacta de secagem', price: 39.99 },
  { product: 'kit 5 camisetas Dry Fit', price: 99.99 },
  { product: 'caneleiras de peso - 3kg (par)', price: 44.99 },
  { product: 'bola de ginástica e pilates', price: 149.59 },
  { product: 'óculos de natação', price: 18.99 },
  { product: 'capa protetora de prancha de surf', price: 89.59 },
  { product: 'bola de basquete', price: 39.99 },
];

const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

const verifyName = (name) => {
  if (name === '') {
    throw new Error('Um nome não foi digitado, tente novamente');
  } else if (!isNaN(name)) {
    throw new Error('Nome inválido, insira um nome válido');
  }
}

const verifyNumber = (number) => {
  if (number === '') {
    throw new Error('Digite um número')
  } else if (isNaN(number)) {
    throw new Error('Digite um número válido')
  } else if (number < 1 || number > 10) {
    throw new Error('O número digitado deve entre 1 e 10')
  } else if (Number.isInteger(Number(number)) === false) {
    throw new Error('Por favor, digite um número inteiro')
  }
}

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  const productObject = checkNumber(parseInt(number));

  try {
    verifyName(name)
    verifyNumber(number)
    firstText.innerHTML = `Boas-vindas, ${name}!`;
    secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
  } catch (error) {
    // firstText.innerHTML = ''
    secondText.innerHTML = error.message
  } finally {
    firstText.innerHTML = ''
    secondText.innerHTML = ''
  }
}

// Segunda parte
const checkNumber = (number) => {
  return promo[number - 1];
}