const { checkUpperBound } = require("./bounds.js");

function checkChargeRate(chargeRate) {
  return checkUpperBound(chargeRate, 0.8, "Charge Rate is too high!");
}

module.exports = { checkChargeRate };
