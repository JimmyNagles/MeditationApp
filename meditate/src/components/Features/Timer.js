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

  //checks if timer is on or off
  useEffect(() => {
    //declares value
    let interval = null;

    //if its on then
    if (isActive) {
      //
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      if (seconds === -1) {
        reset();
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div
      style={{
        border: "3px solid green ",
        borderRadius: "10px",
        padding: "5px 5px 5px",
      }}
    >
      <h2 className="center">{seconds}s</h2>
      <input
        placeholder="enter seconds"
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      ></input>

      <div className="">
        <button
          className={` btn ${isActive ? "red" : "green"}`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className=" btn black" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
