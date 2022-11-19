import Flow from "../components/Flow/Flow";
import StatusBar, { RobotSignal } from "../components/StatusBar";

export default function Home() {
  const data: RobotSignal = {
    wifiLevel: "GREAT",
    batteryLevel: 90,
  };
  return (
    <div className="h-screen">
      <StatusBar wifiLevel={data.wifiLevel} batteryLevel={data.batteryLevel} />
      <Flow></Flow>
    </div>
  );
}
