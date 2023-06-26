import './style.css';

const cepInputEl = document.querySelector('input');
const consultEl = document.querySelector('button');
const dadosEl = document.querySelector('pre');



consultEl.addEventListener('click', async () => {
  try {
    const cep = cepInputEl.value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    dadosEl.innerHTML = JSON.stringify(data)

  } catch (error) {
    dadosEl.innerHTML = `erro: ${error.message}
CEP inválido`
  } 
})