const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getSpecies(species) {
  const speciesName = [];
  species.forEach((specieId) => {
    const specie = getSpeciesByIds(specieId)[0];
    if (specie) {
      speciesName.push(specie.name);
    }
  });
  return speciesName;
}

function getLocations(species) {
  const locations = [];
  species.forEach((specieId) => {
    const specie = getSpeciesByIds(specieId)[0];
    if (specie) {
      const { location } = specie;
      locations.push(location);
    }
  });
  return locations;
}

function getEmployeeInformation(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee.responsibleFor),
    locations: getLocations(employee.responsibleFor),
  };
}

function findEmployee({ id, name }) {
  let wantedEmployee = data.employees.find((employee) => employee.id === id);
  if (wantedEmployee) return getEmployeeInformation(wantedEmployee);
  wantedEmployee = data.employees.find((employee) => employee.firstName === name);
  if (wantedEmployee) return getEmployeeInformation(wantedEmployee);
  wantedEmployee = data.employees.find((employee) => employee.lastName === name);
  if (wantedEmployee) return getEmployeeInformation(wantedEmployee);
  throw new Error('Informações inválidas');
}

function getEmployeesCoverage(idOrName) {
  if (idOrName) {
    return findEmployee(idOrName);
  }
  return data.employees.map((employee) => getEmployeeInformation(employee));
}

module.exports = getEmployeesCoverage;
