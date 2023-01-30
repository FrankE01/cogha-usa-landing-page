import React, { useState, useEffect } from "react";

const Timer = ({ deadline }) => {
  const [months, setmonths] = useState(0);
  const [weeks, setweeks] = useState(0);
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const textStyle = {
    large: {
      color: "#aaaaaa",
      fontFamily: "Quicksand var",
      fontSize: "1vw",
      fontWeight: "600",
    },
    small: {
      color: "#aaaaaa",
      fontFamily: "Quicksand var",
      fontSize: "12px",
      fontWeight: "600",
    },
  };

  const clockStyle = {
    large: {
      color: "#ffffff",
      fontFamily: "Serif",
      fontWeight: "600",
      fontSize: "4.3vw",
    },
    small: {
      fontFamily: "Serif",
      fontSize: "40px",
      fontWeight: "600",
      color: "#ffffff",
    },
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      setInnerWidth(window.innerWidth);
    }

    let countDownDate = new Date(deadline).getTime();

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
  }, [deadline]);

  return (
    <>
      <p style={innerWidth > 500 ? clockStyle.large : clockStyle.small}>
        {months <= 0 && weeks <= 0 && days < 10
          ? "0" + days
          : months <= 0 && weeks <= 0
          ? days
          : months <= 0 && weeks < 10
          ? "0" + weeks
          : months <= 0
          ? weeks
          : months < 10
          ? "0" + months
          : months}
        :
        {months <= 0 && weeks <= 0 && hours < 10
          ? "0" + hours
          : months <= 0 && weeks <= 0
          ? hours
          : months <= 0 && days < 10
          ? "0" + days
          : months <= 0
          ? days
          : weeks < 10
          ? "0" + weeks
          : weeks}
        :
        {months <= 0 && weeks <= 0 && minutes < 10
          ? "0" + minutes
          : months <= 0 && weeks <= 0
          ? minutes
          : months <= 0 && hours < 10
          ? "0" + hours
          : months <= 0
          ? hours
          : days < 10
          ? "0" + days
          : days}
        :
        {months <= 0 && weeks <= 0 && seconds < 10
          ? "0" + seconds
          : months <= 0 && weeks <= 0
          ? seconds
          : months <= 0 && minutes < 10
          ? "0" + minutes
          : months <= 0
          ? minutes
          : hours < 10
          ? "0" + hours
          : hours}
      </p>
      <div
        className={innerWidth > 500 ? "-mt-5 ml-2" : "-mt-3"}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: innerWidth > 500 ? "20vw" : "200px",
          textAlign: "center",
        }}
      >
        <p style={innerWidth > 500 ? textStyle.large : textStyle.small}>
          {months <= 0 && weeks <= 0
            ? "Days"
            : months <= 0
            ? "Weeks"
            : "Months"}
        </p>
        <p style={innerWidth > 500 ? textStyle.large : textStyle.small}>
          {months <= 0 && weeks <= 0 ? "Hours" : months <= 0 ? "Days" : "Weeks"}
        </p>
        <p style={innerWidth > 500 ? textStyle.large : textStyle.small}>
          {months <= 0 && weeks <= 0
            ? "Minutes"
            : months <= 0
            ? "Hours"
            : "Days"}
        </p>
        <p style={innerWidth > 500 ? textStyle.large : textStyle.small}>
          {months <= 0 && weeks <= 0
            ? "Seconds"
            : months <= 0
            ? "Minutes"
            : "Hours"}
        </p>
      </div>
    </>
  );
};

export default Timer;
