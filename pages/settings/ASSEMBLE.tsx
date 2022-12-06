import Layout from "../../components/Layout";
import BreadCrumb from "../../components/BreadCrumbs";
import clsx from "clsx";
import { IoIosSave } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import BackButton from "../../components/BackButton";
import StartPoint from "../../components/StartPoint";
import SettingHeader from "../../components/SettingHeader";
import { useBearStore } from "../../lib/zustand";
import EndPoint from "../../components/EndPoint";

function SMTSetting() {
  const startPoint = useBearStore((state: any) => state.startPoint);
  const endPoint = useBearStore((state: any) => state.endPoint);
  const removeAllPoint = useBearStore((state: any) => state.removeAllPoint);
  return (
    <Layout>
      <div
        className={clsx(
          "bg-white h-20 rounded-md flex py-auto items-center px-2 py-1"
        )}
      >
        <BackButton></BackButton>
        <BreadCrumb className="ml-2 flex-1" />
        <div className="flex gap-2">
          <div className="btn bg-blue-400 border-none text-white w-28 p-1 hover:bg-blue-500">
            <IoIosSave size={25} className="mr-2"></IoIosSave>
            Save
          </div>
          <div
            className="btn bg-red-500 border-none text-white w-28 p-1 hover:bg-red-600"
            onClick={() => removeAllPoint()}
          >
            <GiCancel className="mr-2" size={25}></GiCancel>
            Cancel
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-full mt-3 rounded-md flex gap-3 px-2">
        <div className="setting-container">
          <SettingHeader type="START POINTS"></SettingHeader>
          {startPoint.map((point: string, index: number) => (
            <StartPoint name={point} key={index}></StartPoint>
          ))}
        </div>
        <div className="setting-container">
          <SettingHeader type="END POINTS"></SettingHeader>
          {endPoint.map((point: string, index: number) => (
            <EndPoint name={point} key={index}></EndPoint>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default SMTSetting;
