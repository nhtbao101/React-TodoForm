import React, { useState } from "react";
import "./index.css";

const ColorBox = () => {
  const arrColor = ["yellow", "red", "blue", "purple", "orange"];
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("box-color") || "pink";
    return initialColor;
  });

  const onClickColor = () => {
    const newColor = arrColor[Math.floor(Math.random() * 5)];
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={onClickColor}
    ></div>
  );
};

export default ColorBox;
