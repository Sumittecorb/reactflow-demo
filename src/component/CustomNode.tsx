import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

const options = [
  {
    value: "smoothstep",
    label: "Smoothstep",
  },
  {
    value: "step",
    label: "Step",
  },
  {
    value: "default",
    label: "Bezier (default)",
  },
  {
    value: "straight",
    label: "Straight",
  },
];

function Select({
  value,
  handleId,
  nodeId,
}: {
  value?: string;
  handleId?: any;
  nodeId?: string;
}) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt: any) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select">
      <div>Edge Type</div>
      <select className="nodrag" onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Handle type="source" position={Position.Right} id={handleId} />
    </div>
  );
}

function CustomNode({ id, data }: { id?: string; data?: any }) {
  return (
    <>
      <div className="custom-node__header">
        This is a <strong>custom node</strong>
      </div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <Select
            key={handleId}
            nodeId={id}
            value={data.selects[handleId]}
            handleId={handleId}
          />
        ))}
      </div>
    </>
  );
}

export function FullPyramid({ id, data }: { id: string; data: any }) {
  console.log("Data", id);

  return (
    <>
      <div className="degreeSquare">
        <div
          style={{
            transform: "rotate(-45deg)",
            fontSize: "15px",
            textAlign: "center",
            color:"black",
           
          }}
        >
          {data.label}
        </div>
        <Handle
          type="source"
          style={{ top: -7, left: -3, background: "#555" }}
          id="t"
          position={Position.Top}
        />
        <Handle
          type="source"
          style={{ top: 98, left: 102, background: "#555" }}
          id="b"
          position={Position.Bottom}
        />
        
        <Handle
          type="target"
          style={{ top: 101, left: -6, background: "#555" }}
          position={Position.Top}
        />
        <Handle
          type="source"
          style={{ top: 0, right: -6, background: "#555" }}
          id="r"
          position={Position.Right}
        />
      </div>
    </>
  );
}

export default memo(CustomNode);
