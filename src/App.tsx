import React, { useCallback, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode, { FullPyramid } from "./component/CustomNode";
import { nodes as initialNodes } from "./component/InitialElements/Nodes";
import { edges as initialEdges } from "./component/InitialElements/Edges";
import { AddNode } from "./component/AddNode";
const nodeTypes = {
  custom: CustomNode,
  pyramid: FullPyramid,
};
const getId = () => `node-${Math.random()}`;
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef<any>(null);
  const connectingNodeId = useRef<any>(null);
  // const { project } = useReactFlow();
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onConnectStart = useCallback((_: any, { nodeId }: { nodeId: any }) => {
    connectingNodeId.current = nodeId;
  }, []);
  const onConnectEnd = useCallback((event: any) => {
    console.log(" event.target", event.target.classList);

    const targetIsPaneTerminal =
      event.target.classList.contains("react-terminal");
    const targetIsPaneProcess =
      event.target.classList.contains("react-process");
    const targetIsPaneDecision =
      event.target.classList.contains("react-decision");
    if (targetIsPaneTerminal) {
      // we need to remove the wrapper bounds, in order to get the correct position
      const curveNodeStart = {
        background: "#ffd233",
        color: "black",
        width: 70,
        borderRadius: "18px",
      };
      const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
      const id = getId();

      const newNode = {
        id,
        position: {
          x: event.clientX - left - 75,
          y: event.clientY - top,
        },
        data: { label: `Node ${id}` },
        style: curveNodeStart,
      };

      setNodes((nds) => nds.concat(newNode));
      setEdges((eds) =>
        eds.concat({ id, source: connectingNodeId.current, target: id })
      );
    }
    if (targetIsPaneProcess) {
      const rectangelNode = {
        color: "black",
        backgroundColor: "#aff4c6",
        border: "2px solid #8cc39e ",
      };

      const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
      const id = getId();

      const newNode = {
        id,
        position: {
          x: event.clientX - left - 75,
          y: event.clientY - top,
        },
        data: { label: `Node ${id}` },
        style: rectangelNode,
      };

      setNodes((nds) => nds.concat(newNode));
      setEdges((eds) =>
        eds.concat({ id, source: connectingNodeId.current, target: id })
      );
    }
    if (targetIsPaneDecision) {
      // we need to remove the wrapper bounds, in order to get the correct position
      const curveNodeStart = {
        background: "#ffd233",
        color: "black",
        width: 70,
        borderRadius: "18px",
      };
      const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
      const id = getId();

      const newNode = {
        id,
        type:"pyramid",
        position: {
          x: event.clientX - left - 75,
          y: event.clientY - top,
        },
        data: { label: `Node ${id}` },
      };

      setNodes((nds) => nds.concat(newNode));
      setEdges((eds) =>
        eds.concat({ id, source: connectingNodeId.current, target: id })
      );
    }
  }, []);

  const addNode = () => {
    console.log("addNode");
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        // onClickCapture={onConnectEnd}
        // onPaneClick={onConnectEnd}
        fitView
        nodeTypes={nodeTypes}
      >
        <AddNode onConnectEnd={onConnectEnd} />
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
