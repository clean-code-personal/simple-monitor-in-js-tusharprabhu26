const { expect } = require("chai");
const { batteryIsOk } = require("../bms-monitor");

let batteryCheckStatus = batteryIsOk(25, 70, 0.7);
expect(batteryCheckStatus.isOk).to.be.true;
if (!batteryCheckStatus.isOk) console.log(batteryCheckStatus.statusMessage);

batteryCheckStatus = batteryIsOk(50, 85, 0);
expect(batteryCheckStatus.isOk).to.be.false;
if (!batteryCheckStatus.isOk) console.log(batteryCheckStatus.statusMessage);
