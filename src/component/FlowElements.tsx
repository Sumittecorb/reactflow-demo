import { MarkerType, Position } from "reactflow";
import FullPyramidNode from "./FullPyramid";

export const nodes = [
  {
    id: "node-1",
    type: "input ",
    data: {
      label: "User",
    },
    style: {
      background: "#ffd233",
      color: "black",
      width: 70,
      borderRadius: "18px",
    },
    position: { x: 0, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-2",
    type: "input ",
    data: {
      label: "Parent",
    },
    style: {
      color: "black",
      width: 70,
      borderRadius: "18px",
      backgroundColor: "#aff4c6",
      border: "2px solid #8cc39e ",
    },
    position: { x: 100, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-3",
    type: "pyramid",
    data: {
      label: "New User/Existing User",
    },
    position: { x: 250, y: -32 },
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-4",
    type: "input ",
    data: {
      label: "SignUp and Enter Details",
    },
    style: {
      color: "black",
      backgroundColor: "#aff4c6",
      border: "2px solid #8cc39e ",
    },
    position: { x: 225, y: -200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Bottom,
    draggable: true,
  },
  {
    id: "node-5",
    type: "input ",
    data: {
      label: "Existing User",
    },
    className: "circle",
    style: {
      color: "black",
      backgroundColor: "#aff4c6",
      border: "2px solid #8cc39e ",
    },
    position: { x: 450, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "node-6",
    type: "input ",
    data: {
      label: "Login Through Email and Password",
    },
    style: {
      color: "black",
      backgroundColor: "#aff4c6",
      border: "2px solid #8cc39e ",
    },
    position: { x: 700, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-7",
    type: "pyramid",
    data: {
      label: "Check the Validation",
    },
    position: { x: 950, y: -50 },
    draggable: true,
  },
  {
    id: "node-8",
    type: "input ",
    data: {
      label: "Logged In",
    },
    style: {
      color: "black",
      backgroundColor: "#aff4c6",
      border: "2px solid #8cc39e ",
    },
    position: { x: 1150, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-9",
    type: "input",
    data: {
      label: "Home Screen",
    },
    style: {
      color: "black",
      backgroundColor: "#aff4c6",
      border: "2px solid #8cc39e ",
      borderRadius: 20,
    },
    position: { x: 1350, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-10",
    type: "input ",
    data: {
      label: "Partnership",
    },
    style: {
      color: "black",
      backgroundColor: "#aff4c6",
      border: "2px solid #8cc39e ",
    },
    position: { x: 1350, y: -200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
];
// export const nodes = [
//   {
//     id: "node-1",
//     type: "input ",
//     data: {
//       label: "User",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-2",
//     type: "input ",
//     data: {
//       label: "Parent",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-3",
//     type: "input ",
//     data: {
//       label: "New User/Existing User",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-4",
//     type: "input ",
//     data: {
//       label: "SignUp and Enter Details",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-5",
//     type: "input ",
//     data: {
//       label: "Existing User",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-6",
//     type: "input ",
//     data: {
//       label: "Login Through Email and Password",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-7",
//     type: "input ",
//     data: {
//       label: "Check the Validation",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-8",
//     type: "input ",
//     data: {
//       label: "Logged In",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-9",
//     type: "input ",
//     data: {
//       label: "Home Screen",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-10",
//     type: "input ",
//     data: {
//       label: "Partnership",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-11",
//     type: "input ",
//     data: {
//       label: "Search Daycare",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-12",
//     type: "input ",
//     data: {
//       label: "Providers",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-13",
//     type: "input ",
//     data: {
//       label: "Forgot Password",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-14",
//     type: "input ",
//     data: {
//       label: "Reset Password",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-15",
//     type: "input ",
//     data: {
//       label: "Profile Section",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-16",
//     type: "input ",
//     data: {
//       label: "Search API and List of the Daycare",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-17",
//     type: "input ",
//     data: {
//       label: "Enter Email",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-18",
//     type: "input ",
//     data: {
//       label: "Link set for Verification",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-19",
//     type: "input ",
//     data: {
//       label: "Profile edited and Update",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-20",
//     type: "input ",
//     data: {
//       label: "Edit Profile Change Password setting Logout",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-21",
//     type: "input ",
//     data: {
//       label: "Detail Page of Daycare ",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-22",
//     type: "input ",
//     data: {
//       label: "Enter enquiry Form and Click on submit",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-23",
//     type: "input ",
//     data: {
//       label: "Request Submitted",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-24",
//     type: "input ",
//     data: {
//       label: "Logout ",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-25",
//     type: "input ",
//     data: {
//       label: "Change Password",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
//   {
//     id: "node-26",
//     type: "input ",
//     data: {
//       label: "End",
//     },
//     position: { x: 250, y: 0 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//     draggable: true,
//   },
// ];

export const edges = [
  {
    id: "e1-2",
    source: "node-1",
    target: "node-2",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-3",
    source: "node-2",
    target: "node-3",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e1-3a",
    source: "node-3",
    target: "node-4",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    sourceHandle: "t",
    animated: true,
  },

  {
    id: "e1-3",
    source: "node-3",
    target: "node-5",
    sourceHandle: "r",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
  },
  {
    id: "e4-9",
    source: "node-4",
    target: "node-9",
    type: "smoothstep",
    sourceHandle: "handle-0",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-5",
    source: "node-5",
    target: "node-6",
    type: "smoothstep",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-5",
    source: "node-6",
    target: "node-7",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e7-13",
    source: "node-7",
    target: "node-13",
    type: "smoothstep",
    sourceHandle: "b",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e7-8",
    source: "node-7",
    target: "node-8",
    type: "smoothstep",
    sourceHandle: "r",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e8-9",
    source: "node-8",
    target: "node-9",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
