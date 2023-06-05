const newEmployees = (funcaoCallback) => {
  const employees = {
    id1: funcaoCallback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcaoCallback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcaoCallback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmployer = (completeName) => {
  const email = `${completeName.replace(' ', '_')}@trybe.com`;
  return { Nome: completeName, Email: email };
};

console.log(newEmployees(generateEmployer));
