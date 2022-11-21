import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiGasStationFill } from "react-icons/ri";
import { BsFillStopwatchFill } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import clsx from "clsx";

export function BottomNavbar() {
  const router = useRouter();

  return (
    <div
      className={clsx("bg-white", "max-h-1/4 box-content w-full", "rounded-md")}
    >
      <div className="w-100 flex justify-around p-3">
        <button
          className={clsx(
            "btn-menu",
            router.pathname === "/" && "btn-menu-active"
          )}
          onClick={() => router.push("/")}
        >
          <AiFillHome size={20} className="mr-2"></AiFillHome>
          HOME
        </button>
        <button
          className={clsx(
            "btn-menu",
            router.pathname === "/settings" && "btn-menu-active"
          )}
          onClick={() => router.push("/settings")}
        >
          <AiFillSetting size={20} className="mr-2"></AiFillSetting>
          SETTINGS
        </button>
        <button
          className={clsx(
            "btn-menu",
            router.pathname === "/charger" && "btn-menu-active"
          )}
        >
          <RiGasStationFill size={20} className="mr-2"></RiGasStationFill>
          CHARGER
        </button>
        <button
          className={clsx(
            "btn-menu",
            router.pathname === "/wait" && "btn-menu-active"
          )}
        >
          <BsFillStopwatchFill size={20} className="mr-2"></BsFillStopwatchFill>
          WAIT
        </button>
        <button
          className={clsx(
            "btn-menu",
            router.pathname === "/clamp" && "btn-menu-active"
          )}
        >
          <IoDocumentTextSharp size={20} className="mr-2"></IoDocumentTextSharp>
          OPEN CLAMP
        </button>
      </div>
    </div>
  );
}
