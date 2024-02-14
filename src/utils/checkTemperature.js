const { checkLowerBound, checkUpperBound } = require("./bounds.js");

function checkTemperature(temperature) {
  return (
    checkLowerBound(temperature, 0, "Temperature is too low!") ||
    checkUpperBound(temperature, 45, "Temperature is too high!")
  );
}

module.exports = { checkTemperature };
