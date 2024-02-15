function checkBounds(
  testValue,
  lowerBound,
  upperBound,
  lowMessage,
  highMessage
) {
  const conditions = [
    {
      check: () => lowerBound !== null && testValue < lowerBound,
      result: lowMessage,
    },
    {
      check: () => upperBound !== null && testValue > upperBound,
      result: highMessage,
    },
  ];

  for (let condition of conditions) {
    if (condition.check()) {
      return condition.result;
    }
  }

  return "within range";
}

module.exports = { checkBounds };
