const parameters = [
  {
    name: "Temperature",
    value: 25,
    lowerBound: 0,
    upperBound: 45,
    lowMessage: "too low",
    highMessage: "too high",
  },
  {
    name: "State of Charge",
    value: 50,
    lowerBound: 20,
    upperBound: 80,
    lowMessage: "too low",
    highMessage: "too high",
  },
  {
    name: "Charge Rate",
    value: 0.5,
    lowerBound: null, //because chargeRate has no lower bound
    upperBound: 0.8,
    lowMessage: "too low",
    highMessage: "too high",
  },
];

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

function checkParameter(parameter) {
  return checkBounds(
    parameter.value,
    parameter.lowerBound,
    parameter.upperBound,
    parameter.lowMessage,
    parameter.highMessage
  );
}

module.exports = { parameters, checkParameter };
