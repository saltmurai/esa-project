import clsx from "clsx";
import { GiCancel } from "react-icons/gi";
import { IoIosSave } from "react-icons/io";
import BackButton from "../../components/BackButton";
import BreadCrumb from "../../components/BreadCrumbs";
import Layout from "../../components/Layout";

function AutoSettings() {
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
          <div className="btn bg-red-500 border-none text-white w-28 p-1 hover:bg-red-600">
            <GiCancel className="mr-2" size={25}></GiCancel>
            Cancel
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-md flex gap-2">
        <div className="bg-white rounded-md flex-1 flex flex-col">
          <div className="text-black font-semibold ml-3 mt-4">SMT</div>
          <div className="flex flex-col justify-center items-center">
            Select a time
            <div className="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
              <div className="flex">
                <select
                  name="hours"
                  className="bg-transparent text-xl appearance-none outline-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">10</option>
                  <option value="12">12</option>
                </select>
                <span className="text-xl mr-3">:</span>
                <select
                  name="minutes"
                  className="bg-transparent text-xl appearance-none outline-none mr-4"
                >
                  <option value="0">00</option>
                  <option value="0">15</option>
                  <option value="0">30</option>
                  <option value="30">45</option>
                </select>
                <select
                  name="ampm"
                  className="bg-transparent text-xl appearance-none outline-none"
                >
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md flex-1">ASSEMBLE</div>
      </div>
    </Layout>
  );
}

export default AutoSettings;
