import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  //turns on or off the timer
  function toggle() {
    setIsActive(!isActive);
  }
  // resets the timer//
  //sets state to 0 seconds
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <h2 className="center">{seconds}s</h2>
      <div className="row">
        <button
          className={`btn ${isActive ? "red" : "green"}`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="btn black" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
