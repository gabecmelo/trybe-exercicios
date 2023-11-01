const dividirNumero = (n1, n2) => {
  const promise = new Promise((resolve, reject) => {
    if (n2 == 0) reject(new Error('Não é possível dividir por 0'));

    const result = n1 / n2;
    resolve(result);
  });
  return promise;
};

dividirNumero(2, 0)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));

/* 
  const divisãoAssincrona = async () =>{
  const result = await dividirNumero(2, 0)
  console.log(result);
}

divisãoAssincrona();

  Não trata o erro ^
 */

