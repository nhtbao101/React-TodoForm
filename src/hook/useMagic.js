import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const randomColor = (currentColor) => {
  const LIST_COLOR = ["yellow", "blue", "orange", "#2dff14"];
  const currentIndex = LIST_COLOR.indexOf(currentColor);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 4);
  }
  return LIST_COLOR[newIndex];
};

function useMagic() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
      console.log(newColor);
      console.log("xxx", colorRef);
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagic;
