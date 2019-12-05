import React from "react";

let Time = 123654;
let sec = Time / 1000;
let hours = parseInt(sec / 3600);
let minutes = parseInt((sec % 3600) / 60);
let seconds = parseInt(((sec % 3600) % 60) % 60);

function Timer() {
  return (
    <div className="hole-time">
      <div className="T">
        <span>{hours < 10 ? "0" + hours : hours}:</span>
        <p>Hour</p>
      </div>
      <div className="T">
        <span>{minutes < 10 ?"0"+ minutes : minutes}:</span>
        <p>Minutes</p>
      </div>
      <div className="T">
        <span>{seconds < 10 ?"0"+ seconds : seconds}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
}
export default Timer;
