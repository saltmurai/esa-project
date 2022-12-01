import clsx from "clsx";
import { BottomNavbar } from "../components/BottomNavBar";
import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import StatusBar, { RobotSignal } from "../components/StatusBar";
import { useBearStore } from "../lib/zustand";

export default function Home() {
  const data: RobotSignal = {
    wifiLevel: "GREAT",
    batteryLevel: 90,
  };

  return (
    <Layout>
      <div className={clsx("bg-white p-2", "flex h-2/5", "rounded-md")}>
        <StatCard text="SMT ROUTE" number={112}></StatCard>
        <div className="bg-white flex-1"></div>
      </div>
      <div className={clsx("bg-white", "h-2/5", "rounded-md")}>
        <div className={clsx("bg-white p-2", "flex h-2/5", "rounded-md")}>
          <StatCard text="ASSEMBLY ROUTE" number={108}></StatCard>
          <div className="bg-white flex-1"></div>
        </div>
      </div>
    </Layout>
  );
}
