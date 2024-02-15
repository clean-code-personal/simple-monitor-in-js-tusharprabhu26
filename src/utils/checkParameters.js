const { checkBounds } = require("./bounds.js");

function checkParameter(parameter) {
  return checkBounds(
    parameter.value,
    parameter.lowerBound,
    parameter.upperBound,
    parameter.lowMessage,
    parameter.highMessage
  );
}

module.exports = { checkParameter };
