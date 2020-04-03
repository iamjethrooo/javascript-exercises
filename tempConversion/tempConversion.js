const ftoc = function(tempInFahrenheit) {
  tempInCelcius = Math.round((tempInFahrenheit - 32) * (5 / 9) * 10) / 10;
  return tempInCelcius;
};

const ctof = function(tempInCelcius) {
  tempInFahrenheit = Math.round((tempInCelcius * (9 / 5) + 32) * 10) / 10;
  return tempInFahrenheit;
};

module.exports = {
  ftoc,
  ctof
};
