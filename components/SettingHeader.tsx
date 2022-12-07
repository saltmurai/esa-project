import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";
import { useBearStore } from "../lib/zustand";

function SettingHeader({ type }: { type: "START POINTS" | "END POINTS" }) {
  return (
    <div className="w-full flex">
      <div className="flex-1 text-black font-semibold text-xl">{type}</div>
    </div>
  );
}

export default SettingHeader;
