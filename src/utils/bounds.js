function checkLowerBound(testValue, lowerBound, message) {
  if (lowerBound !== null && testValue < lowerBound) {
    return message;
  }
  return "";
}

function checkUpperBound(testValue, upperBound, message) {
  if (upperBound !== null && testValue > upperBound) {
    return message;
  }
  return "";
}

module.exports = { checkLowerBound, checkUpperBound };
