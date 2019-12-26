import React from "react";

function PageNumber(props) {
  const { movies, onClick, pagePerCount } = props;

  const page = movies.length / pagePerCount;
  let rows = [];
  for (let i = 0; i < page; ++i) {
    rows.push(
      <button key={i} onClick={() => onClick(i)}>
        {i + 1}
      </button>,
    );
  }
  return <div className="pageNumber">{rows}</div>;
}

export default PageNumber;
