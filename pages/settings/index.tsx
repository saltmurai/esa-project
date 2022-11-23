import Layout from "../../components/Layout";
import MenuCard from "../../components/MenuCard";
import { BsFillCartFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { AiFillPlayCircle, AiFillRobot } from "react-icons/ai";
import { useRouter } from "next/router";

function Settings() {
  const router = useRouter();

  return (
    <Layout>
      <div className="h-4/5 bg-white flex justify-center flex-col items-center space-y-4">
        <div className="flex gap-4">
          <div
            className="setting-menu bg-blue-400 hover:bg-blue-500"
            onClick={() => router.push("/settings/SMT")}
          >
            <div className="mb-auto p-2">SMT</div>
            <div className="flex justify-end mr-2 mb-3">
              <BsFillCartFill size={30} className="mt-auto"></BsFillCartFill>
            </div>
          </div>
          <div
            className="setting-menu bg-orange-400 hover:bg-orange-500"
            onClick={() => {
              router.push("/settings/ASSEMBLE");
            }}
          >
            <div className="mb-auto p-2">ASSEMBLE</div>
            <div className="flex justify-end mr-2 mb-3">
              <IoSettings size={30} className="mt-auto"></IoSettings>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="setting-menu bg-green-400 hover:bg-green-500">
            <div className="mb-auto p-2">AUTO</div>
            <div className="flex justify-end mr-2 mb-3">
              <AiFillPlayCircle
                size={30}
                className="mt-auto"
              ></AiFillPlayCircle>
            </div>
          </div>
          <div className="setting-menu bg-yellow-400 hover:bg-yellow-500">
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
