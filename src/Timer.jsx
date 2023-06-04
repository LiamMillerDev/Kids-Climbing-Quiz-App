import React, { useEffect, useState } from "react";

const Timer = ({ start, setTime }) => {
  const [localTime, setLocalTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setLocalTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    setTime(localTime);
  }, [localTime, setTime]);

  // Format time
  const seconds = ("0" + (Math.floor(localTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor(localTime / 60000)).slice(-2);

  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
};

export default Timer;
