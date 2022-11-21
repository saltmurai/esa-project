import clsx from "clsx";
import { ReactNode } from "react";
import { BottomNavbar } from "./BottomNavBar";
import StatusBar, { RobotSignal } from "./StatusBar";

export default function Layout({ children }: { children: ReactNode }) {
  const data: RobotSignal = {
    wifiLevel: "GREAT",
    batteryLevel: 90,
  };

  return (
    <div className="h-screen w-screen bg-gray-100 box-borer px-3 pb-2 flex flex-col gap-2 justify-between">
      <StatusBar
        wifiLevel={data.wifiLevel}
        batteryLevel={data.batteryLevel}
        style="bg-gray-100"
      />
      {children}
      <BottomNavbar />
    </div>
  );
}
