function checkLow(testValue, lowerBound, lowMessage) {
  if (lowerBound !== null && testValue < lowerBound) {
    return lowMessage;
  }
  return null;
}
function checkHigh(testValue, upperBound, highMessage) {
  if (upperBound !== null && testValue > upperBound) {
    return highMessage;
  }
  return null;
}

module.exports = { checkLow, checkHigh };
