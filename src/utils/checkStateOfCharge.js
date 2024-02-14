const { checkLowerBound, checkUpperBound } = require("./bounds.js");

function checkStateOfCharge(stateOfCharge) {
  return (
    checkLowerBound(stateOfCharge, 20, "State of Charge is too low!") ||
    checkUpperBound(stateOfCharge, 80, "State of Charge is too high!")
  );
}

module.exports = { checkStateOfCharge };
