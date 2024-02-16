const { checkParameter } = require("./utils/checkBatteryBounds");

function batteryIsOk(parameters) {
  let statusMessage = "";
  parameters.forEach((parameter) => {
    let message = checkParameter(parameter);
    if (message !== "within range") {
      statusMessage += `${message}. `;
    }
  });
  if (statusMessage === "") {
    statusMessage = "All parameters are within range.";
  }
  return {
    isOk: statusMessage === "All parameters are within range.",
    statusMessage: statusMessage,
  };
}


module.exports = { batteryIsOk };
