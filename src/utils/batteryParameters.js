const parameters = [
  {
    name: "Temperature",
    lowerBound: 0,
    upperBound: 45,
    lowMessage: "Temperature is too low",
    highMessage: "Temperature is too high",
    warningLowMessage: "Warning: Temperature is approaching lower limit (0°C)",
    warningHighMessage:
      "Warning: Temperature is approaching upper limit (45°C)",
  },
  {
    name: "State of Charge",
    lowerBound: 20,
    upperBound: 80,
    lowMessage: "State of Charge is too low",
    highMessage: "State of charge is too high",
    warningLowMessage:
      "Warning: State of Charge is approaching discharge (20%)",
    warningHighMessage:
      "Warning: State of Charge is approaching charge-peak (80%)",
  },
  {
    name: "Charge Rate",
    lowerBound: null, //because chargeRate has no lower bound
    upperBound: 0.8,
    lowMessage: null,
    highMessage: "Charge rate is too high",
    warningLowMessage: null,
    warningHighMessage:
      "Warning: Charge Rate is approaching charge-peak (0.8C)",
  },
];

module.exports = { parameters };
