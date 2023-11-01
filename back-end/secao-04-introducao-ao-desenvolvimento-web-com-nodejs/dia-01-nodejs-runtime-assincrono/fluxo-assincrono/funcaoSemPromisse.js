const dividirNumero = (n1, n2) => {
  if (n2 == 0) throw new Error('Não é possível dividir por 0')

  return n1 / n2
}

try {
  const result = dividirNumero(2, 0)
  console.log(result); 
} catch (e) {
  console.log(e.message);
}
