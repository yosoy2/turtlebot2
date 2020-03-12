
"use strict";

let VersionInfo = require('./VersionInfo.js');
let BumperEvent = require('./BumperEvent.js');
let ScanAngle = require('./ScanAngle.js');
let PowerSystemEvent = require('./PowerSystemEvent.js');
let SensorState = require('./SensorState.js');
let ControllerInfo = require('./ControllerInfo.js');
let CliffEvent = require('./CliffEvent.js');
let DigitalOutput = require('./DigitalOutput.js');
let ExternalPower = require('./ExternalPower.js');
let RobotStateEvent = require('./RobotStateEvent.js');
let KeyboardInput = require('./KeyboardInput.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let Sound = require('./Sound.js');
let Led = require('./Led.js');
let ButtonEvent = require('./ButtonEvent.js');
let DockInfraRed = require('./DockInfraRed.js');
let MotorPower = require('./MotorPower.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');
let AutoDockingResult = require('./AutoDockingResult.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');

module.exports = {
  VersionInfo: VersionInfo,
  BumperEvent: BumperEvent,
  ScanAngle: ScanAngle,
  PowerSystemEvent: PowerSystemEvent,
  SensorState: SensorState,
  ControllerInfo: ControllerInfo,
  CliffEvent: CliffEvent,
  DigitalOutput: DigitalOutput,
  ExternalPower: ExternalPower,
  RobotStateEvent: RobotStateEvent,
  KeyboardInput: KeyboardInput,
  DigitalInputEvent: DigitalInputEvent,
  WheelDropEvent: WheelDropEvent,
  Sound: Sound,
  Led: Led,
  ButtonEvent: ButtonEvent,
  DockInfraRed: DockInfraRed,
  MotorPower: MotorPower,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingActionResult: AutoDockingActionResult,
  AutoDockingAction: AutoDockingAction,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
  AutoDockingActionGoal: AutoDockingActionGoal,
  AutoDockingResult: AutoDockingResult,
  AutoDockingGoal: AutoDockingGoal,
};
