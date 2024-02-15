const { expect } = require("chai");
const { batteryIsOk } = require("../src/bms-monitor");

describe("Battery Monitor", function () {
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

  const testCases = [
    { values: [-10, 10, -0.1], expected: false },
    { values: [-10, 10, 0.7], expected: false },
    { values: [-10, 10, 0.9], expected: false },

    { values: [-10, 40, -0.1], expected: false },
    { values: [-10, 40, 0.7], expected: false },
    { values: [-10, 40, 0.9], expected: false },

    { values: [-10, 85, -0.1], expected: false },
    { values: [-10, 85, 0.7], expected: false },
    { values: [-10, 85, 0.9], expected: false },

    { values: [30, 10, -0.1], expected: false },
    { values: [30, 10, 0.7], expected: false },
    { values: [30, 10, 0.9], expected: false },

    { values: [30, 40, -0.1], expected: true },
    { values: [30, 40, 0.7], expected: true },
    { values: [30, 40, 0.9], expected: false },

    { values: [30, 85, -0.1], expected: false },
    { values: [30, 85, 0.7], expected: false },
    { values: [30, 85, 0.9], expected: false },

    { values: [50, 50, -0.1], expected: false },
    { values: [50, 50, 0.7], expected: false },
    { values: [50, 50, 0.9], expected: false },

    { values: [50, 50, -0.1], expected: false },
    { values: [50, 50, 0.7], expected: false },
    { values: [50, 50, 0.9], expected: false },

    { values: [50, 20, -0.1], expected: false },
    { values: [50, 20, 0.7], expected: false },
    { values: [50, 20, 0.9], expected: false },
    
  ];

  testCases.forEach((testCase, index) => {
    it(`should return ${testCase.expected} for test case ${
      index + 1
    }`, function () {
      const testParameters = parameters.map((parameter, i) => ({
        ...parameter,
        value: testCase.values[i],
      }));
      let batteryCheckStatus = batteryIsOk(testParameters);
      expect(batteryCheckStatus.isOk).to.equal(testCase.expected);
      console.log(
        `Test case ${index + 1}: ${batteryCheckStatus.statusMessage}`
      );
    });
  });
});
