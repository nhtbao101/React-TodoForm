import React from "react";
import PropTypes from "prop-types";
import useMagic from "../../hook/useMagic";
import "../MagicBox/magic.css";

MagicBox.propTypes = {};

function MagicBox() {
  const color = useMagic();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
