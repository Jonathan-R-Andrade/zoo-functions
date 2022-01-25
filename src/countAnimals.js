const data = require('../data/zoo_data');

function getTotalAnimals() {
  const animals = {};
  data.species.forEach((specie) => {
    animals[specie.name] = specie.residents.length;
  });
  return animals;
}

function countAnimalsBySex({ residents } = {}, sex) {
  if (residents) {
    return residents.reduce((total, animal) => (
      (!sex || animal.sex === sex) ? total + 1 : total
    ), 0);
  }
  return 0;
}

function countAnimals({ specie, sex } = {}) {
  if (!specie && !sex) return getTotalAnimals();
  const animals = data.species.find((animal) => animal.name === specie);
  return countAnimalsBySex(animals, sex);
}

module.exports = countAnimals;
