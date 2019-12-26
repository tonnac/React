import React from "react";
import { Link } from "react-router-dom";
import "./Movielist.css";

function Movie({ movie }) {
  return (
    <div className="Movie">
      <div className="movie__id">{movie.id}</div>
      <Link to={{ pathname: `movie/${movie.id}`, state: movie }}>
        <div className="movie__title">{movie.title}</div>
      </Link>
      <div className="movie__date">{movie.date_uploaded}</div>
    </div>
  );
}

export default Movie;
