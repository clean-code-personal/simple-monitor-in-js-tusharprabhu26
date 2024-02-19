function checkWarningLow(testValue, lowerBound, warningLowMessage) {
  const warningTolerance = lowerBound * 0.05;
  if (lowerBound !== null && testValue <= lowerBound + warningTolerance) {
    return warningLowMessage;
  }
  return null;
}

function checkWarningHigh(testValue, upperBound, warningHighMessage) {
  const warningTolerance = upperBound * 0.05;
  if (upperBound !== null && testValue >= upperBound - warningTolerance) {
    return warningHighMessage;
  }
  return null;
}

module.exports = { checkWarningLow, checkWarningHigh };

