import React from "react";
import "./Headline.css";

function Headline(props) {
  const { page, results, pagePerCount } = props;
  return (
    <div className="back">
      <div className="headitem page">{`Page Number: ${page} of ${results /
        pagePerCount}`}</div>
      <div className="headitem results">{`results found: ${results}`}</div>
    </div>
  );
}

export default Headline;
