import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useClock from "../../hook/useClock";

Clock.propTypes = {};

function formatDate(date) {
  const hour = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hour}:${minutes}:${seconds}`;
}

function Clock() {
  const { time } = useClock();
  return <div style={{ fontSize: "30px" }}>{time}</div>;
}

export default Clock;
