import clsx from "clsx";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useBearStore } from "../../lib/zustand";
import EndPoint from "../EndPoint";
import StartPoint from "../StartPoint";

function SettingContent({
  options,
  type,
}: {
  options: string[];
  type: "START POINTS" | "END POINTS";
}) {
  const [value, setValue] = useState("");
  const [pointID, setPointID] = useState("");
  const [typePoint, setTypePoint] = useState("");
  const startPoint = useBearStore((state: any) => state.startPoint);
  const endPoint = useBearStore((state: any) => state.endPoint);
  const addStartPoint = useBearStore((state: any) => state.addStartPoint);
  const addEndPoint = useBearStore((state: any) => state.addEndPoint);

  const typeOption = ["STATION", "NORMAL POINT", "CHARGE POINT", "WAIT POINT"];
  return (
    <>
      <div className="flex-1 overflow-scroll max-h-full">
        {type === "START POINTS"
          ? startPoint.map((point: any, index: number) => (
              <StartPoint name={point.name} key={index}></StartPoint>
            ))
          : endPoint.map((point: any, index: number) => (
              <EndPoint name={point.name} key={index}></EndPoint>
            ))}
      </div>
      <div className="justify-self-end h-24 flex items-center px-3 border-to">
        <div>
          <label className="label ml-2">
            <span className="label-text">Point Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input bg-gray-100 text-black mr-3 ml-2"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <label className="label ml-2">
            <span className="label-text">Point ID</span>
          </label>
          <select
            className="select bg-gray-100 text-black"
            onChange={(e) => setPointID(e.target.value)}
          >
            <option disabled selected>
              Select
            </option>
            {options.map((option: string, index: number) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex-1 ml-2">
          <label className="label ml-2">
            <span className="label-text">Point type</span>
          </label>
          <select
            className="select bg-gray-100 text-black"
            onChange={(e) => setTypePoint(e.target.value)}
          >
            <option disabled selected>
              Select
            </option>
            {typeOption.map((option: string, index: number) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
        <div
          className={clsx(
            "btn bg-blue-400 hover:bg-blue-500 text-white border-none rounded-sm p-1 w-20 h-4 ml-2 mt-9",
            (!value || !pointID || !typePoint) && "btn-disabled bg-gray-300"
          )}
          onClick={() => {
            if (type === "START POINTS") {
              addStartPoint({ name: value, id: pointID, type: typePoint });
              setValue("");
              setPointID("");
              setTypePoint("");
              return;
            }
            addEndPoint({ name: value, id: pointID, type: typePoint });
            setValue("");
            setPointID("");
            setTypePoint("");
          }}
        >
          <AiOutlinePlus size={23}></AiOutlinePlus>
          ADD
        </div>
      </div>
    </>
  );
}

export default SettingContent;
