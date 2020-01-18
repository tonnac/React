import React from "react";
import "./tooltip.css";

export default function Btn(props) {
  const { id, text } = props;
  console.log(props["data-txt"]);
  return (
    <button type="button" id={id} {...props}>
      {text}
    </button>
  );
}
