const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getOldestAnimal(residents) {
  return residents.reduce((oldest, animal) => ((animal.age > oldest.age) ? animal : oldest));
}

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((wantedEmployee) => wantedEmployee.id === id);
  const firstSpecies = getSpeciesByIds(employee.responsibleFor[0])[0];
  const { name, sex, age } = getOldestAnimal(firstSpecies.residents);
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
