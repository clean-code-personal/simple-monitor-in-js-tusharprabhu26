const { expect } = require("chai");
const { batteryIsOk } = require("../src/bms-monitor");
const { parameters } = require("../src/utils/batteryParameters");

describe("Battery Monitor", function () {
  const testCases = [
    // temperature and soc are too low
    { values: [-10, 10, -0.1], expected: false },
    { values: [-10, 10, 0.7], expected: false },
    { values: [-10, 10, 0.9], expected: false }, //charge rate is high

    //temperature is too low
    { values: [-10, 40, -0.1], expected: false },
    { values: [-10, 40, 0.7], expected: false },
    { values: [-10, 40, 0.9], expected: false }, //charge rate is high

    //temperature is too low, soc is too high
    { values: [-10, 85, -0.1], expected: false },
    { values: [-10, 85, 0.7], expected: false },
    { values: [-10, 85, 0.9], expected: false }, //charge rate is high

    //soc is too low
    { values: [30, 10, -0.1], expected: false },
    { values: [30, 10, 0.7], expected: false },
    { values: [30, 10, 0.9], expected: false }, //charge rate is high

    // all parameters in range
    { values: [30, 40, -0.1], expected: true },
    { values: [30, 40, 0.7], expected: true },

    { values: [30, 40, 0.9], expected: false }, //charge rate is high

    //soc is too high
    { values: [30, 85, -0.1], expected: false },
    { values: [30, 85, 0.7], expected: false },
    { values: [30, 85, 0.9], expected: false }, //charge rate is high

    //temperature is too high, soc is too low
    { values: [50, 10, -0.1], expected: false },
    { values: [50, 10, 0.7], expected: false },
    { values: [50, 10, 0.9], expected: false }, //charge rate is high

    //temperature is too hifh
    { values: [50, 50, -0.1], expected: false },
    { values: [50, 50, 0.7], expected: false },
    { values: [50, 50, 0.9], expected: false }, //charge rate is high

    //temperature and soc are too high
    { values: [50, 85, -0.1], expected: false },
    { values: [50, 85, 0.7], expected: false },
    { values: [50, 85, 0.9], expected: false }, //charge rate is high

    //warning tests

    // for approaching low(temperature, soc)
    { values: [2, 24, 0.76], expected: false },
    { values: [2, 25, 0.76], expected: false },
    { values: [10, 24, 0.76], expected: false },

    //for approching high
    { values: [43, 76, 0.76], expected: false },
    { values: [43, 76, 0.7], expected: false },
    { values: [43, 25, 0.76], expected: false },
    { values: [43, 25, 0.7], expected: false },
    { values: [10, 76, 0.76], expected: false },
    { values: [10, 76, 0.7], expected: false },
  ];

  testCases.forEach((testCase, index) => {
    it(`should return ${testCase.expected} for test case ${
      index + 1
    }`, function () {
      let batteryCheckStatus = batteryIsOk(
        parameters.map((parameter, i) => ({
          ...parameter,
          value: testCase.values[i],
        }))
      );
      expect(batteryCheckStatus.isOk).to.equal(testCase.expected);
      console.log(
        `Test case ${index + 1}: ${batteryCheckStatus.statusMessage}`
      );
    });
  });
});
