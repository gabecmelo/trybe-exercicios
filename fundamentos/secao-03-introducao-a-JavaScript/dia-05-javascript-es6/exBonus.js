const substituaX = (nome) => `Tryber ${nome} aqui!`


const minhasSkills = (substituaX) => {
  const skills = ['JavaScript', 'HTML', 'CSS']

  let fraseSkills = (`${substituaX}\nMinhas três principais habilidades são: ${skills}`)
  return fraseSkills
}

console.log(minhasSkills(substituaX('Bebeto')));