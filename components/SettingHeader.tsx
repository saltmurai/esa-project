import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";
import { useBearStore } from "../lib/zustand";

function SettingHeader({ type }: { type: "START POINTS" | "END POINTS" }) {
  const addStartPoint = useBearStore((state: any) => state.addStartPoint);
  const addEndPoint = useBearStore((state: any) => state.addEndPoint);

  async function addLocationHandler() {
    const { value: pointName } = await Swal.fire({
      title: `ADD ${type}`,
      input: "text",
      inputAutoTrim: true,
      inputLabel: "POINT NAME",
      showCancelButton: true,
      confirmButtonText: "OK",
    });
    if (type === "START POINTS") addStartPoint(pointName);
    else addEndPoint(pointName);
  }
  return (
    <div className="w-full flex">
      <div className="flex-1 text-black font-semibold text-xl">{type}</div>
      <div
        className="btn bg-blue-400 hover:bg-blue-500 text-white border-none rounded-sm p-1 w-20 h-8"
        onClick={addLocationHandler}
      >
        <AiOutlinePlus size={23}></AiOutlinePlus>
        ADD
      </div>
    </div>
  );
}

export default SettingHeader;
