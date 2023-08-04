import { MarkerType } from "reactflow";

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
    
  },

  {
    id: "e1-3",
    source: "node-3",
    target: "node-5",
    sourceHandle: "r",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    
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
