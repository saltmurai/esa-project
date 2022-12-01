import clsx from "clsx";
import { useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImLoop2 } from "react-icons/im";

interface StatCard {
  text: string;
  number: number;
}

function StatCard({ text, number }: StatCard) {
  const [autoMode, setMode] = useState(true);
  return (
    <div className="w-72 mt-2 flex flex-col gap-2">
      <div className="bg-blue-400 text-white gap-8 text-xl h-8 rounded-md pl-2 flex items-center">
        <FaMapMarkerAlt size={20}></FaMapMarkerAlt>
        <div>{text}</div>
      </div>
      <div className="flex flex-col bg-blue-400 text-white rounded-md justify-center pt-2 pb-2 gap-2 items-center">
        <div>
          <BsFillCartFill size={30}></BsFillCartFill>
        </div>
        <div className="">Finished Delivery</div>
        <div className="text-xl">{number}</div>
      </div>
      <div className="bg-gray-200 flex p-2 gap-2 rounded-sm">
        <div
          className={clsx(
            "btn-menu rounded-md flex-1",
            !autoMode && "bg-blue-400 text-white"
          )}
          onClick={() => setMode(false)}
        >
          Manual
        </div>
        <div
          className={clsx(
            "btn-menu rounded-md flex-1",
            autoMode && "bg-blue-400 text-white"
          )}
          onClick={() => setMode(true)}
        >
          Auto
        </div>
      </div>
      {autoMode ? (
        <div className="flex gap-2">
          <div className="flex-1 flex bg-blue-200 items-center rounded-md text-blue-600 p-2">
            <AiFillClockCircle size={25}></AiFillClockCircle>
            <div className="ml-2">12:00:00</div>
          </div>
          <div className="flex-1 flex bg-blue-200 items-center rounded-md text-blue-600 p-2">
            <ImLoop2 size={25}></ImLoop2>
            <div className="ml-2">2:00</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default StatCard;
