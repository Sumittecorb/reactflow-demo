import React from 'react';

const FullPyramidNode = () => {
  // Customize the pyramid size and colors as needed
  const width = 100;
  const height = 100;
  const color = '#ff0000';

  return (
    <svg width={width} height={height} viewBox="0 0 100 100">
      <polygon
        points="0,0 100,0 50,100"
        fill={color}
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default FullPyramidNode;