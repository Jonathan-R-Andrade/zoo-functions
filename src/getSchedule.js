const data = require('../data/zoo_data');

function getOfficeHour(day) {
  const { open, close } = data.hours[day];
  if (open === 0 && close === 0) return 'CLOSED';
  return `Open from ${open}am until ${close}pm`;
}

function getExhibition(day) {
  const exhibition = [];
  data.species.forEach((specie) => {
    if (specie.availability.includes(day)) {
      exhibition.push(specie.name);
    }
  });
  return (exhibition.length) ? exhibition : 'The zoo will be closed!';
}

function getScheduleByDay(day) {
  return {
    [day]: {
      officeHour: getOfficeHour(day),
      exhibition: getExhibition(day),
    },
  };
}

function getSchedule(scheduleTarget) {
  if (data.hours[scheduleTarget]) {
    return getScheduleByDay(scheduleTarget);
  }
  const animal = data.species.find((specie) => specie.name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  const schedule = {};
  Object.keys(data.hours).forEach((day) => Object.assign(schedule, getScheduleByDay(day)));
  return schedule;
}

module.exports = getSchedule;
