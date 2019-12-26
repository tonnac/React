import React from "react";
import Movie from "./Movielist";
import "./List.css";

function List(props) {
  const { movies, pagePerCount, currentPage, onClick } = props;
  let rows = [];
  let _movies = movies.slice(
    (currentPage - 1) * pagePerCount,
    currentPage * pagePerCount,
  );

  _movies.forEach((movie, index) => {
    rows.push(<Movie key={index} movie={movie} onClick={a => onClick(a)} />);
  });
  return <div className="body">{rows}</div>;
}

export default List;
