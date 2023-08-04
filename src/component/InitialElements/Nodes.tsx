import { Position } from "reactflow";

const borderCss = {
  backgroundColor: "#aff4c6",
  border: "2px solid #8cc39e ",
};
const curveNodeStart = {
  background: "#ffd233",
  color: "black",
  width: 70,
  borderRadius: "18px",
};

const rectangelNode = {
  color: "black",
  ...borderCss,
};
const ovalNode = {
  color: "black",
  ...borderCss,
  borderRadius: 20,
};

const curveNodeEnd = {
  background: "#ff9790",
  color: "black",
  width: 70,
  borderRadius: "18px",
};

export const nodes = [
  // Start Node
  {
    id: "node-1",
    type: "start",
    data: {
      label: "User",
    },
    style: curveNodeStart,
    position: { x: -100, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  //
  {
    id: "node-2",
    type: "",
    data: {
      label: "Parent",
    },
    style: rectangelNode,
    position: { x: 50, y: 0 },
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
    draggable: true,
  },
  {
    id: "node-4",
    type: "",
    data: {
      label: "SignUp and Enter Details",
    },
    style: rectangelNode,
    position: { x: 225, y: -200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Bottom,
    draggable: true,
  },
  {
    id: "node-5",
    type: "",
    data: {
      label: "Existing User",
    },
    className: "circle",
    style: rectangelNode,
    position: { x: 450, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "node-6",
    type: "",
    data: {
      label: "Login Through Email and Password",
    },
    style: rectangelNode,
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
    type: "",
    data: {
      label: "Logged In",
    },
    style: rectangelNode,
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
    style: ovalNode,
    position: { x: 1350, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-10",
    type: "",
    data: {
      label: "Partnership",
    },
    style: rectangelNode,
    position: { x: 1350, y: -200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },

  {
    id: "node-11",
    type: "",
    style: rectangelNode,
    data: {
      label: "Search Daycare",
    },
    position: { x: 1550, y: 0 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-12",
    type: "",
    style: rectangelNode,
    data: {
      label: "Providers",
    },
    position: { x: 1550, y: -200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-13",
    type: "",
    style: rectangelNode,
    data: {
      label: "Forgot Password",
    },
    position: { x: 950, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-14",
    type: "",
    style: rectangelNode,
    data: {
      label: "Reset Password",
    },
    position: { x: 1150, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-15",
    type: "",
    style: rectangelNode,
    data: {
      label: "Profile Section",
    },
    position: { x: 1350, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-16",
    type: "pyramid",
    data: {
      label: "Search API and List of the Daycare",
    },
    position: { x: 1550, y: 200 },
    draggable: true,
  },
  {
    id: "node-17",
    type: "",
    style: rectangelNode,
    data: {
      label: "Enter Email",
    },
    position: { x: 950, y: 400 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-18",
    type: "",
    style: rectangelNode,
    data: {
      label: "Link set for Verification",
    },
    position: { x: 1150, y: 400 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-19",
    type: "",
    style: rectangelNode,
    data: {
      label: "Profile edited and Update",
    },
    position: { x: 1150, y: 600 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-20",
    type: "pyramid",
    data: {
      label: "Edit Profile Change Password setting Logout",
    },
    position: { x: 1350, y: 600 },
    draggable: true,
  },
  {
    id: "node-21",
    type: "",
    style: rectangelNode,
    data: {
      label: "Detail Page of Daycare ",
    },
    position: { x: 1550, y: 600 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-22",
    type: "pyramid",
    data: {
      label: "Enter enquiry Form and Click on submit",
    },
    position: { x: 1750, y: 600 },
    draggable: true,
  },
  {
    id: "node-23",
    type: "",
    style: rectangelNode,
    data: {
      label: "Request Submitted",
    },
    position: { x: 1950, y: 600 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-24",
    type: "",
    style: rectangelNode,
    data: {
      label: "Logout ",
    },
    position: { x: 1350, y: 800 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-25",
    type: "",
    style: rectangelNode,
    data: {
      label: "Change Password",
    },
    position: { x: 1550, y: 800 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
  {
    id: "node-26",
    type: "",
    style: curveNodeEnd,
    data: {
      label: "End",
    },
    position: { x: 1350, y: 1000 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
];
