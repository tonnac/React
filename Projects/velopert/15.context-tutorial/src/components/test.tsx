import React, { useContext } from "react";
import ColorContext from "../contexts/color";

export default function Test() {
  const { state } = useContext(ColorContext);
  console.log(state);
  return <div></div>;
}
