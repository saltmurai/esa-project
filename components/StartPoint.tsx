import { useBearStore } from "../lib/zustand";

function StartPoint({ name }: { name: string }) {
  const removeStartPoint = useBearStore((state: any) => state.removeStartPoint);
  return (
    <div className="bg-gray-100 flex rounded-md items-center px-2">
      <div className="flex-1 text-black font-semibold">{name}</div>
      <div className="gap-1 flex my-1">
        <div className="btn bg-blue-400 border-none rounded-none text-white w-20 p-1 hover:bg-blue-500">
          EDIT
        </div>
        <div
          className="btn bg-red-500 border-none rounded-none text-white w-20 p-1 hover:bg-red-600"
          onClick={() => removeStartPoint(name)}
        >
          DELETE
        </div>
      </div>
    </div>
  );
}

export default StartPoint;
