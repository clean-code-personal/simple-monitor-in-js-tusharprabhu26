const checkBounds = (
  testValue,
  lowerBound,
  upperBound,
  lowMessage,
  highMessage
) => {
  if (lowerBound !== null && testValue < lowerBound) {
    return lowMessage;
  }
  if (upperBound !== null && testValue > upperBound) {
    return highMessage;
  }
  return "";
};

const checkTemperature = (temperature) => {
  return checkBounds(
    temperature,
    0,
    45,
    "Temperature is too low!",
    "Temperature is too high!"
  );
};

const checkStateOfCharge = (stateOfCharge) => {
  return checkBounds(
    stateOfCharge,
    20,
    80,
    "State of Charge is too low!",
    "State of Charge is too high!"
  );
};

const checkChargeRate = (chargeRate) => {
  return checkBounds(chargeRate, null, 0.8, null, "Charge Rate is too high!");
};

module.exports = { checkTemperature, checkStateOfCharge, checkChargeRate };
