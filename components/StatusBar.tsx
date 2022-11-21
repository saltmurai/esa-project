import Image from "next/image";
import { useState } from "react";
import BatteryGauge from "react-battery-gauge";
//@ts-ignore
import WifiIndicator, { Streng } from "react-wifi-indicator";
import { clsx } from "clsx";
import moment from "moment";

export interface RobotSignal {
  wifiLevel:
    | "EXCELLENT"
    | "GREAT"
    | "OKAY"
    | "WEAK"
    | "UNUSABLE"
    | "DISCONNECTED";
  batteryLevel: number;
  style?: string;
}

export default function StatusBar({
  wifiLevel,
  batteryLevel,
  style,
}: RobotSignal) {
  const batteryCustomization = {
    batteryBody: {
      strokeWidth: 2,
      cornerRadius: 4,
      fill: "none",
      strokeColor: "#111",
    },
    batteryCap: {
      fill: "none",
      strokeWidth: 4,
      strokeColor: "#111",
      cornerRadius: 2,
      capToBodyRatio: 0.4,
    },
    batteryMeter: {
      fill: "green",
      lowBatteryValue: 15,
      lowBatteryFill: "red",
      outerGap: 1,
      noOfCells: 1, // more than 1, will create cell battery
      interCellsGap: 1,
    },
    readingText: {
      lightContrastColor: "#111",
      darkContrastColor: "#fff",
      lowBatteryColor: "red",
      fontFamily: "Helvetica",
      fontSize: 25,
      showPercentage: false,
    },
    chargingFlash: {
      scale: undefined,
      fill: "orange",
      animated: true,
      animationDuration: 1000,
    },
  };

  const formatedDate = moment().format("hh:mm, dddd, MMMM D, YYYY");

  return (
    <div className={clsx("navbar", "bg-gray-100 h-3 pt-0 px-5", style)}>
      <div className="navbar-start text-zinc-800 font-bold">{formatedDate}</div>
      <div className="navbar-center">
        <Image src={"/esa-logo.png"} alt={"ESA LOGO"} width={107} height={20} />
      </div>
      <div className="navbar-end">
        <WifiIndicator
          strength={wifiLevel}
          className="mr-4"
          style={{
            height: "2em",
          }}
        />
        <BatteryGauge
          value={batteryLevel}
          size={45}
          customization={batteryCustomization}
        />
      </div>
    </div>
  );
}
