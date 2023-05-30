
const techList = (arrayTech, stringName) => {
  if (arrayTech.length === 0) {
    return 'Vazio!'
  } else {
    const listaOrdenada = arrayTech.sort();
    const techList = []
    for (const tech of listaOrdenada) {
      techList.push({'tech': tech,
      'name': stringName})
    }
    return techList
  }
}

console.log(techList(['CSS', 'HTML', 'JavaScript', 'Jest', 'React'], 'Lucas'));

module.exports = techList;