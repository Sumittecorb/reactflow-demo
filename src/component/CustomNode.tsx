import { Handle, Position } from "reactflow";

export function FullPyramid({ id, data }: { id: string; data: any }) {
  return (
    <>
      <div className="degreeSquare">
        <div
          style={{
            transform: "rotate(-45deg)",
            fontSize: "15px",
            textAlign: "center",
            color: "black",
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
