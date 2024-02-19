const { expect } = require("chai");
const { parameters } = require("../src/utils/batteryParameters");

// test for validating the structure of 'parameters' in src/utils/batteryParameters.js
describe("Battery Parameters Structure Validation", function () {
  const languages = ["en", "de", "ar", "ms"]; //add language code in this array
  const messages = [
    "lowMessage",
    "highMessage",
    "warningLowMessage",
    "warningHighMessage",
  ];

  parameters.forEach((parameter) => {
    describe(parameter.name, function () {
      languages.forEach((language) => {
        describe(language, function () {
          messages.forEach((message) => {
            it(`${parameter.name} should have a ${message}`, function () {
              expect(parameter[language]).to.have.property(message);
            });
          });
        });
      });
    });
  });
});
