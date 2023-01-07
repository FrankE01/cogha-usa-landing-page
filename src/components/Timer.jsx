import React, { useState, useEffect } from "react";

const Timer = () => {
  const [months, setmonths] = useState(0);
  const [weeks, setweeks] = useState(0);
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    let countDownDate = new Date("Apr 1, 2023 12:00:00").getTime();

    let countDown = () => {
      let now = new Date().getTime();
      let timeleft = countDownDate - now;

      let months = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 7 * 4));
      let weeks = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24 * 7 * 4)) / (1000 * 60 * 60 * 24 * 7)
      );
      let days = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
      );
      let hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setmonths(months);
      setweeks(weeks);
      setdays(days);
      sethours(hours);
      setminutes(minutes);
      setseconds(seconds);
    };

    const interval = setInterval(() => countDown(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      style={{
        color: "#ffffff",
        fontFamily: "Josephin Sans",
        fontWeight: "600",
        fontSize: "64px",
      }}
    >
      {months < 10 ? "0" + months : months}:{weeks < 10 ? "0" + weeks : weeks}:
      {days < 10 ? "0" + days : days}:{hours < 10 ? "0" + hours : hours}
    </p>
  );
};

export default Timer;
