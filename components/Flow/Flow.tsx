import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";

import "reactflow/dist/base.css";
import { useBearStore } from "../../lib/zustand";

import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const initEdges = [];

const Flow = () => {
  const startPoint = useBearStore((state: any) => state.startPoint);
  const endPoint = useBearStore((state: any) => state.endPoint);
  const points = (() => {
    const rootNodes = startPoint.map((point: any, index: number) => ({
      id: `${index}`,
      type: "custom",
      data: { name: point },
      position: { x: 0, y: index * 50 },
    }));
    const leafNodes = endPoint.map((point: any, index: number) => ({
      id: `${index + startPoint.length}`,
      type: "custom",
      data: { name: point },
      position: { x: 200 * (index + 1), y: -200 },
    }));
    return [...rootNodes, ...leafNodes];
  })();
  const [nodes, setNodes, onNodesChange] = useNodesState(points);

  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
