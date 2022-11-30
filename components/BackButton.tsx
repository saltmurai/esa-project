import { useRouter } from "next/router";
import { MdKeyboardBackspace } from "react-icons/md";
function BackButton() {
  const router = useRouter();
  return (
    <div
      className="btn bg-gray-100 border-none hover:bg-gray-200"
      onClick={() => router.push("/")}
    >
      <MdKeyboardBackspace size={20} color={"black"}></MdKeyboardBackspace>
      <div className="text-black ml-2">BACK</div>
    </div>
  );
}

export default BackButton;
