const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((specie) => specie.name === animal);
  if (animals) {
    return animals.residents.every((resident) => resident.age >= age);
  }
  return undefined;
}

module.exports = getAnimalsOlderThan;
