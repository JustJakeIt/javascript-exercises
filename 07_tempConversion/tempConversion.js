const ftoc = function (fTemp) {
  const cTemp = (fTemp - 32) * (5 / 9);
  let roundcTemp = cTemp.toFixed(1);
  const displayTemp = Number(roundcTemp);
  return displayTemp;
};

const ctof = function (cTemp) {
  const fTemp = cTemp * (9 / 5) + 32;
  let roundfTemp = fTemp.toFixed(1);
  const displayTemp = Number(roundfTemp);
  return displayTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
