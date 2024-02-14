function checkRange(testValue, lowerBound, upperBound, parameterLabel) {
  let breach = "";
  let breachType =
    lowerBound !== null && testValue < lowerBound
      ? "low"
      : upperBound !== null && testValue > upperBound
      ? "high"
      : "";
  if (breachType) {
    return `${parameterLabel} is too ${breachType}!`;
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
