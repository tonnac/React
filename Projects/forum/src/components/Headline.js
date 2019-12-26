import React from "react";
import "./Headline.css";

function Headline(props) {
  return (
    <div className="back">
      <div className="headitem page">{`Page Number: ${
        props.page
      } of ${props.results / 20}`}</div>
      <div className="headitem results">{`results found: ${props.results}`}</div>
    </div>
  );
}

export default Headline;
