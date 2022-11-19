import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "reactflow";

import "reactflow/dist/base.css";

// import "./tailwind-config.js";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
  {
    id: "1",
    data: { label: "SMT ROUTE" },
    position: { x: 200, y: 250 },
    className: "bg-blue-200 w-50 h-50 text-center text-black text-bold text-xl",
    style: {
      width: 800,
      height: 200,
    },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "2" },
    position: { x: 0, y: 0 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "SMT" },
    position: { x: 50, y: 50 },
    parentNode: "1",
  },
  {
    id: "5",
    data: { label: "ASSEMBLE ROUTE" },
    position: { x: 200, y: -250 },
    className: "bg-blue-200 w-50 h-50 text-center text-black text-bold text-xl",
    style: {
      width: 800,
      height: 200,
    },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "LM" },
    position: { x: 50, y: 50 },
    parentNode: "5",
  },
];

const initEdges = [
  {
    id: "e1-2",
    source: "2",
    target: "3",
  },
  {
    id: "e1-3",
    source: "2",
    target: "4",
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
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
      fitView={true}
      maxZoom={0.8}
      className="bg-teal-50"
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default Flow;
