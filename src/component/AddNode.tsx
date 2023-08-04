import { Panel } from "reactflow";

export const AddNode = ({ onConnectEnd }: { onConnectEnd: any }) => {
  return (
    <Panel position="top-right">
      <div className="addNodeContainer">
        <p className="tHeader">Add Node</p>
        <hr />
        <div className="d-flex align-items-center justify-content-center">
          <button className="react-terminal terminalBtn" onClick={onConnectEnd}>
            Terminal
          </button>
          <button className="react-process process" onClick={onConnectEnd}>
            Process
          </button>
          <button className="react-decision decision" onClick={onConnectEnd}>
            Decision
          </button>
        </div>
      </div>
    </Panel>
  );
};
