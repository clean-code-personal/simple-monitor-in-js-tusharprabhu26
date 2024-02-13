function checkRange(testValue, lowerBound, upperBound, parameterLabel) {
  if (
    (lowerBound !== null && testValue < lowerBound) ||
    (upperBound !== null && testValue > upperBound)
  ) {
    return `${parameterLabel} is out of range!`;
  }
  return "";
}

function batteryIsOk(temperature, stateOfCharge, chargeRate) {
  let statusMessage =
    checkRange(temperature, 0, 45, "Temperature") ||
    checkRange(stateOfCharge, 20, 80, "State of Charge") ||
    checkRange(chargeRate, null, 0.8, "Charge Rate");
  return {
    isOk: statusMessage === "",
    statusMessage: statusMessage,
  };
}

module.exports = { batteryIsOk };
