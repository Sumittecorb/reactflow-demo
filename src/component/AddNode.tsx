import { Panel } from "reactflow";

export const AddNode = ({ createNode }: { createNode: any }) => {
  
  return (
    <Panel position="top-right">
      <div className="addNodeContainer">
        <p className="tHeader">Add Node</p>
        <hr />
        <div>
          <button className="react-terminal terminalBtn" onClick={createNode}>
            <div className="inner"></div>
            Terminal
          </button>
          <button className="react-process process" onClick={createNode}>
            <div className="inner"></div>
            Process
          </button>
          <button className="react-decision decision" onClick={createNode}>
            <div className="inner"></div> Decision
          </button>
        </div>
      </div>
    </Panel>
  );
};
