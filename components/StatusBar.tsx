import { useState } from "react";
import BatteryGauge from "react-battery-gauge";
//@ts-ignore
import WifiIndicator, { Streng } from "react-wifi-indicator";

export interface RobotSignal {
  wifiLevel:
    | "EXCELLENT"
    | "GREAT"
    | "OKAY"
    | "WEAK"
    | "UNUSABLE"
    | "DISCONNECTED";
  batteryLevel: number;
}

export default function StatusBar({ wifiLevel, batteryLevel }: RobotSignal) {
  return (
    <div className="navbar bg-blue-400 text-white rounded-md h-10">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">ESA-TECH ROBOT </a>
      </div>
      <div className="navbar-end">
        <WifiIndicator strength={wifiLevel} className="mr-4" />
        <BatteryGauge value={batteryLevel} size={80} />
      </div>
    </div>
  );
}
