import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Like from "./nTooltip";
import Spantest from "./Spantest";

const D = () => {
  const [number, setNumber] = useState(0);
  //   useEffect(() => {
  //     console.log("ds");
  //     setNumber(number + 1);
  //   }, [number]);

  const A = useMemo(() => {
    setNumber(number + 1);
    console.log(number);
  }, [number]);

  console.log(A);

  return <button>Click</button>;
};

ReactDOM.render(<D />, document.getElementById("root"));
