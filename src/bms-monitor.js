const { checkParameter } = require("./utils/checkParameters");

function batteryIsOk(parameters) {
  let statusMessage = "";
  parameters.forEach((parameter) => {
    let message = checkParameter(parameter);
    if (message !== "within range") {
      statusMessage += `${parameter.name} is ${message}. `;
    }
  });
  return {
    isOk: statusMessage === "",
    statusMessage: statusMessage,
  };
}

module.exports = { batteryIsOk };
