import React from "react";
import "./Headline.css";

function Headline(props) {
  return (
    <div className="back">
      <div className="item page">{`Page Number: ${
        props.page
      } of ${props.results / 20}`}</div>
      <div className="item results">{`results found: ${props.results}`}</div>
    </div>
  );
}

export default Headline;
