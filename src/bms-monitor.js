const { checkParameter } = require("./utils/checkBatteryBounds");
const { getStatusMessage } = require("./utils/batteryStatusMessages");

//en: English language code (Global)
//de: German language code (Germany)
//ar: Arabic language code (UAE)
//ms: Malay language code (Singapore)

let language = "en";

function batteryIsOk(parameters) {
  let statusMessage = "";
  parameters.forEach((parameter) => {
    let message = checkParameter(parameter, language);
    if (message !== "within range") {
      statusMessage += `${message}. `;
    }
  });
  statusMessage = getStatusMessage(statusMessage, language);
  return {
    isOk: statusMessage === getStatusMessage("", language),
    statusMessage: statusMessage,
  };
}


module.exports = { batteryIsOk };
