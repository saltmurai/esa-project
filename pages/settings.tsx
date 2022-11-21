import Layout from "../components/Layout";
import MenuCard from "../components/MenuCard";
import { BsFillCartFill } from "react-icons/bs";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { AiFillPlayCircle, AiFillRobot } from "react-icons/ai";

function Settings() {
  return (
    <Layout>
      <div className="h-4/5 bg-white flex justify-center flex-col items-center space-y-4">
        <div className="flex gap-4">
          <div className="setting-menu bg-blue-400">
            <div className="mb-auto p-2">SMT</div>
            <div className="flex justify-end mr-2 mb-3">
              <BsFillCartFill size={30} className="mt-auto"></BsFillCartFill>
            </div>
          </div>
          <div className="setting-menu bg-orange-400">
            <div className="mb-auto p-2">ASSEMBLE</div>
            <div className="flex justify-end mr-2 mb-3">
              <HiWrenchScrewdriver
                size={30}
                className="mt-auto"
              ></HiWrenchScrewdriver>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="setting-menu bg-green-400">
            <div className="mb-auto p-2">AUTO</div>
            <div className="flex justify-end mr-2 mb-3">
              <AiFillPlayCircle
                size={30}
                className="mt-auto"
              ></AiFillPlayCircle>
            </div>
          </div>
          <div className="setting-menu bg-yellow-400">
            <div className="mb-auto p-2">ROBOT</div>
            <div className="flex justify-end mr-2 mb-3">
              <AiFillRobot size={30} className="mt-auto"></AiFillRobot>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
