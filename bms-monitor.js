const {
  checkTemperature,
  checkStateOfCharge,
  checkChargeRate,
} = require("./batteryChecks");

function batteryIsOk(temperature, stateOfCharge, chargeRate) {
  let statusMessage =
    checkTemperature(temperature) ||
    checkStateOfCharge(stateOfCharge) ||
    checkChargeRate(chargeRate);
  return {
    isOk: statusMessage === "",
    statusMessage: statusMessage,
  };
}

module.exports = { batteryIsOk };
