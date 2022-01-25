const data = require('../data/zoo_data');

function getResidentsName(residents, sex, sorted) {
  const residentsName = [];
  residents.forEach((resident) => {
    if (!sex || resident.sex === sex) {
      residentsName.push(resident.name);
    }
  });
  if (sorted) residentsName.sort();
  return residentsName;
}

function getAnimals(withName, sex, sorted) {
  const animals = {};
  data.species.forEach((specie) => {
    if (!animals[specie.location]) animals[specie.location] = [];
    if (withName) {
      animals[specie.location].push({
        [specie.name]: getResidentsName(specie.residents, sex, sorted),
      });
    } else {
      animals[specie.location].push(specie.name);
    }
  });
  return animals;
}

function getAnimalMap(options) {
  return (!options || !options.includeNames)
    ? getAnimals(false)
    : getAnimals(true, options.sex, options.sorted);
}

module.exports = getAnimalMap;
