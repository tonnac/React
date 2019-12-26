import React from "react";
import Movie from "./Movielist";
import "./Body.css";

function Body(props) {
  const { movies, pagePerCount, currentPage } = props;
  let rows = [];
  let _movies = movies.slice(
    (currentPage - 1) * pagePerCount,
    currentPage * pagePerCount,
  );

  _movies.forEach((movie, index) => {
    rows.push(<Movie  key={index} movie={movie} />);
  });
  return <div className="body">{rows}</div>;
}

export default Body;
