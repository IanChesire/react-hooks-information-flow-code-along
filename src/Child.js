import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  const handleClick = () => {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  return <di onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
