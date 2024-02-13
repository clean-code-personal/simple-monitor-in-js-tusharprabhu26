function batteryIsOk(temperature, soc, chargeRate) {
  let batteryStatus = {
    isOk: true,
    statusMessage: "",
  };

  if (temperature < 0 || temperature > 45) {
    batteryStatus.isOk = false;
    batteryStatus.statusMessage = "Temperature is out of range!";
  } else if (soc < 20 || soc > 80) {
    batteryStatus.isOk = false;
    batteryStatus.statusMessage = "State of Charge is out of range!";
  } else if (chargeRate > 0.8) {
    batteryStatus.isOk = false;
    batteryStatus.statusMessage = "Charge rate is out of range!";
  }

  return batteryStatus;
}

module.exports = { batteryIsOk };
