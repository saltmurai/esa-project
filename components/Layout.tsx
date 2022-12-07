import clsx from "clsx";
import { ReactNode } from "react";
import { BottomNavbar } from "./BottomNavBar";
import StatusBar, { RobotSignal } from "./StatusBar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function fetchStatus() {
  const res = await axios.get("http://localhost:3000/api/status");
  console.log(res);
  return res.data;
}

export default function Layout({ children }: { children: ReactNode }) {
  // const { data, isLoading, isError } = useQuery(["status"], fetchStatus, {});
  // //TODO: Fetching data here

  return (
    <div className="h-screen w-screen bg-gray-100 box-borer px-3 pb-2 flex flex-col gap-2 justify-between">
      <StatusBar wifiLevel={"GREAT"} batteryLevel={80} style="bg-gray-100" />
      {children}
      <BottomNavbar />
    </div>
  );
}
