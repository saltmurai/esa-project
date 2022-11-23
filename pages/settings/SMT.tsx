import Layout from "../../components/Layout";
import { MdKeyboardBackspace } from "react-icons/md";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/BreadCrumbs";
import clsx from "clsx";
import { IoIosSave } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

function SMTSetting() {
  const router = useRouter();
  return (
    <Layout>
      <div
        className={clsx(
          "bg-white h-20 rounded-md flex py-auto items-center px-2 py-1"
        )}
      >
        <div className="btn bg-gray-100 border-none hover:bg-gray-200">
          <MdKeyboardBackspace size={20} color={"black"}></MdKeyboardBackspace>
          <div className="text-black ml-2">BACK</div>
        </div>
        <BreadCrumb className="ml-2 flex-1" />
        <div className="flex gap-2">
          <div className="btn bg-blue-400 border-none text-white w-28 p-1 hover:bg-blue-500">
            <IoIosSave size={25} className="mr-2"></IoIosSave>
            Save
          </div>
          <div className="btn bg-red-500 border-none text-white w-28 p-1 hover:bg-red-600">
            <GiCancel className="mr-2" size={25}></GiCancel>
            Cancel
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-full mt-3 rounded-md flex gap-3 px-2">
        <div className="setting-container">
          <div className="w-full flex">
            <div className="flex-1 text-black font-semibold text-xl">
              START POINTS
            </div>
            <div className="btn bg-blue-400 hover:bg-blue-500 text-white border-none rounded-sm p-1 w-20 h-8">
              <AiOutlinePlus size={23}></AiOutlinePlus>
              ADD
            </div>
          </div>
          <div className="bg-gray-100 flex rounded-md items-center px-2">
            <div className="flex-1 text-black font-semibold">LINE 1</div>
            <div className="gap-1 flex my-1">
              <div className="btn bg-blue-400 border-none rounded-none text-white w-20 p-1 hover:bg-blue-500">
                EDIT
              </div>
              <div className="btn bg-red-500 border-none rounded-none text-white w-20 p-1 hover:bg-red-600">
                DELETE
              </div>
            </div>
          </div>
        </div>
        <div className="setting-container">
          <div className="w-full flex">
            <div className="flex-1 text-black font-semibold text-xl">
              START POINTS
            </div>
            <div className="btn bg-blue-400 hover:bg-blue-500 text-white border-none rounded-sm p-1 w-20 h-8">
              <AiOutlinePlus size={23}></AiOutlinePlus>
              ADD
            </div>
          </div>
          <div className="bg-gray-100 flex rounded-md items-center px-2">
            <div className="flex-1 text-black font-semibold">LINE 1</div>
            <div className="gap-1 flex my-1">
              <div className="btn bg-blue-400 border-none rounded-none text-white w-20 p-1 hover:bg-blue-500">
                EDIT
              </div>
              <div className="btn bg-red-500 border-none rounded-none text-white w-20 p-1 hover:bg-red-600">
                DELETE
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SMTSetting;
