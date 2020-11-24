import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};

function formatDate(date) {
  const hour = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hour}:${minutes}:${seconds}`;
}

function Clock(props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const dateInterval = setInterval(() => {
      const now = new Date();
      const newDate = formatDate(now);
      setTime(newDate);
    }, 1000);
    return () => {
      clearInterval(dateInterval);
    };
  }, []);
  return <div style={{ fontSize: "30px" }}>{time}</div>;
}

export default Clock;
