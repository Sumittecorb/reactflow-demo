import { useCallback, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { FullPyramid } from "./component/CustomNode";
import { nodes as initialNodes } from "./component/InitialElements/Nodes";
import { edges as initialEdges } from "./component/InitialElements/Edges";
import { AddNode } from "./component/AddNode";
const nodeTypes = {
  pyramid: FullPyramid,
};
const getId = () => `node-${(Math.random() * 100).toFixed(2)}`;

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef<any>(null);
  const connectingNodeId = useRef<any>(null);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const createNode = useCallback((event: any) => {
   

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
        // width: 70,
        borderRadius: "18px",
      };
      const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
      const id = getId();

      const newNode = {
        id,
        position: {
          x: event.clientX - left - 1000,
          y: event.clientY - top + 200,
        },
        data: { label: `New Node ${id}}` },
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
          x: event.clientX - left - 1000,
          y: event.clientY - top + 300,
        },
        data: { label: `New Node ${id}}` },
        style: rectangelNode,
      };

      setNodes((nds) => nds.concat(newNode));
      setEdges((eds) =>
        eds.concat({ id, source: connectingNodeId.current, target: id })
      );
    }
    if (targetIsPaneDecision) {
      const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
      const id = getId();
      const newNode = {
        id,
        type: "pyramid",
        position: {
          x: event.clientX - left - 1000,
          y: event.clientY - top + 400,
        },
        data: { label: `New Node ${id}}` },
      };

      setNodes((nds) => nds.concat(newNode));
      setEdges((eds) =>
        eds.concat({ id, source: connectingNodeId.current, target: id })
      );
    }
  }, []);

  
  return (
    <div style={{ width: "100vw", height: "100vh" }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <AddNode createNode={createNode} />
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
