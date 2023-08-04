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
  backgroundColor: "#aff4c6",
  border: "2px solid #8cc39e ",
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
      title: "User",
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
      title: "Parent",
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
      title: "New User/Existing User",
    },
    position: { x: 250, y: -32 },
    draggable: true,
  },
  {
    id: "node-4",
    type: "",
    data: {
      title: "SignUp and Enter Details",
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
      title: "Existing User",
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
      title: "Login Through Email and Password",
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
      title: "Check the Validation",
    },
    position: { x: 950, y: -50 },
    draggable: true,
  },
  {
    id: "node-8",
    type: "",
    data: {
      title: "Logged In",
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
      title: "Home Screen",
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
      title: "Partnership",
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
      title: "Search Daycare",
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
      title: "Providers",
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
      title: "Forgot Password",
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
      title: "Reset Password",
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
      title: "Profile Section",
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
      title: "Search API and List of the Daycare",
    },
    position: { x: 1550, y: 200 },
    draggable: true,
  },
  {
    id: "node-17",
    type: "",
    style: rectangelNode,
    data: {
      title: "Enter Email",
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
      title: "Link set for Verification",
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
      title: "Profile edited and Update",
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
      title: "Edit Profile Change Password setting Logout",
    },
    position: { x: 1350, y: 600 },
    draggable: true,
  },
  {
    id: "node-21",
    type: "",
    style: rectangelNode,
    data: {
      title: "Detail Page of Daycare ",
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
      title: "Enter enquiry Form and Click on submit",
    },
    position: { x: 1750, y: 600 },
    draggable: true,
  },
  {
    id: "node-23",
    type: "",
    style: rectangelNode,
    data: {
      title: "Request Submitted",
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
      title: "Logout ",
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
      title: "Change Password",
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
      title: "End",
    },
    position: { x: 1350, y: 1000 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: true,
  },
];
