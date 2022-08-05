import React from "react";

const ColorScreen = ({
  children,
  red = 255,
  blue = 255,
  green = 255,
  alpha = 1,
}) => {
  return (
    <div
      className="flex content-center justify-center absolute z-0 w-full h-full transition-colors"
      id="colorScreen"
      style={{ backgroundColor: `rgb(${red}, ${blue}, ${green}, ${alpha})` }}
    >
      {children}
    </div>
  );
};

export default ColorScreen;
