const { checkTemperature } = require("./utils/checkTemperature");
const { checkStateOfCharge } = require("./utils/checkStateOfCharge");
const { checkChargeRate } = require("./utils/checkChargeRate");

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
