const { expect } = require("chai");
const { batteryIsOk } = require("../src/bms-monitor");

describe("Battery Monitor", function () {
  // All parameters too high
  it("should return false when all parameters are too high", function () {
    let batteryCheckStatus = batteryIsOk(50, 85, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  // All parameters too low
  it("should return false when all parameters are too low", function () {
    let batteryCheckStatus = batteryIsOk(-10, 10, -0.1);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  // Temperature too high
  it("should return false when temperature is too high and others are within range", function () {
    let batteryCheckStatus = batteryIsOk(50, 70, 0.7);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  it("should return false when temperature and state of charge are too high", function () {
    let batteryCheckStatus = batteryIsOk(50, 85, 0.7);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  it("should return false when temperature and charge rate are too high", function () {
    let batteryCheckStatus = batteryIsOk(50, 70, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  it("should return false when temperature is too high and others are too low", function () {
    let batteryCheckStatus = batteryIsOk(50, 10, -0.1);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  // Temperature too low
  it("should return false when temperature is too low and others are within range", function () {
    let batteryCheckStatus = batteryIsOk(-10, 70, 0.7);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  it("should return false when temperature is too low and state of charge is too high", function () {
    let batteryCheckStatus = batteryIsOk(-10, 85, 0.7);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  it("should return false when temperature is too low and charge rate is too high", function () {
    let batteryCheckStatus = batteryIsOk(-10, 70, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  it("should return false when temperature is too low and others are too high", function () {
    let batteryCheckStatus = batteryIsOk(-10, 85, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  // State of charge too high
  it("should return false when state of charge is too high and others are within range", function () {
    let batteryCheckStatus = batteryIsOk(25, 85, 0.7);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "State of Charge is too high!"
    );
  });

  it("should return false when state of charge and charge rate are too high", function () {
    let batteryCheckStatus = batteryIsOk(25, 85, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "State of Charge is too high!"
    );
  });

  it("should return false when state of charge is too high and others are too low", function () {
    let batteryCheckStatus = batteryIsOk(-10, 85, -0.1);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  // State of charge too low
  it("should return false when state of charge is too low and others are within range", function () {
    let batteryCheckStatus = batteryIsOk(25, 10, 0.7);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "State of Charge is too low!"
    );
  });

  it("should return false when state of charge is too low and temperature is too high", function () {
    let batteryCheckStatus = batteryIsOk(50, 10, 0.7);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  it("should return false when state of charge is too low and charge rate is too high", function () {
    let batteryCheckStatus = batteryIsOk(25, 10, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "State of Charge is too low!"
    );
  });

  it("should return false when state of charge is too low and others are too high", function () {
    let batteryCheckStatus = batteryIsOk(50, 10, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  // Charge rate too high
  it("should return false when charge rate is too high and others are within range", function () {
    let batteryCheckStatus = batteryIsOk(25, 70, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Charge Rate is too high!"
    );
  });

  it("should return false when charge rate is too high and temperature is too low", function () {
    let batteryCheckStatus = batteryIsOk(-10, 70, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  it("should return false when charge rate is too high and state of charge is too low", function () {
    let batteryCheckStatus = batteryIsOk(25, 10, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "State of Charge is too low!"
    );
  });

  // One parameter too high, others too low
  it("should return false when temperature is too high and others are too low", function () {
    let batteryCheckStatus = batteryIsOk(50, 10, -0.1);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  it("should return false when state of charge is too high and others are too low", function () {
    let batteryCheckStatus = batteryIsOk(-10, 85, -0.1);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  it("should return false when charge rate is too high and others are too low", function () {
    let batteryCheckStatus = batteryIsOk(-10, 10, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  // One parameter too low, others too high
  it("should return false when temperature is too low and others are too high", function () {
    let batteryCheckStatus = batteryIsOk(-10, 85, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too low!"
    );
  });

  it("should return false when state of charge is too low and others are too high", function () {
    let batteryCheckStatus = batteryIsOk(50, 10, 0.9);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  it("should return false when charge rate is too low and others are too high", function () {
    let batteryCheckStatus = batteryIsOk(50, 85, -0.1);
    expect(batteryCheckStatus.isOk).to.be.false;
    expect(batteryCheckStatus.statusMessage).to.equal(
      "Temperature is too high!"
    );
  });

  // Normal case
  it("should return true when all parameters are within the range", function () {
    let batteryCheckStatus = batteryIsOk(25, 70, 0.7);
    expect(batteryCheckStatus.isOk).to.be.true;
    expect(batteryCheckStatus.statusMessage).to.be.empty;
  });
});
