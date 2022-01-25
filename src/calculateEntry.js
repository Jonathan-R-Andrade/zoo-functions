const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const classifiedAges = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) classifiedAges.child += 1;
    else if (age >= 50) classifiedAges.senior += 1;
    else classifiedAges.adult += 1;
  });
  return classifiedAges;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) return 0;
  const classifiedAges = countEntrants(entrants);
  let pay = data.prices.child * classifiedAges.child;
  pay += data.prices.adult * classifiedAges.adult;
  pay += data.prices.senior * classifiedAges.senior;
  return pay;
}

module.exports = { calculateEntry, countEntrants };
