const { checkLow, checkHigh } = require("./checkBatteryLimit");
const { checkWarningLow, checkWarningHigh } = require("./checkBatteryWarning");

function checkBounds(
  testValue,
  lowerBound,
  upperBound,
  lowMessage,
  highMessage,
  warningLowMessage,
  warningHighMessage
) {
  const conditions = [
    checkLow(testValue, lowerBound, lowMessage),
    checkHigh(testValue, upperBound, highMessage),
    checkWarningLow(testValue, lowerBound, warningLowMessage),
    checkWarningHigh(testValue, upperBound, warningHighMessage),
  ];

  for (let condition of conditions) {
    if (condition) {
      return condition;
    }
  }

  return "within range";
}

function checkParameter(parameter) {
  return checkBounds(
    parameter.value,
    parameter.lowerBound,
    parameter.upperBound,
    parameter.lowMessage,
    parameter.highMessage,
    parameter.warningLowMessage,
    parameter.warningHighMessage
  );
}

module.exports = { checkBounds, checkParameter };
