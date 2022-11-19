import React, { memo } from "react";
import { Handle, Position } from "reactflow";

export default function CustomNode({ data }: any) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 min-w-50 min-h-30">
      <div className="flex">
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="h-5 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="h-5 !bg-teal-500"
      />
    </div>
  );
}
