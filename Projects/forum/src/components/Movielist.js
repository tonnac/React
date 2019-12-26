import React from "react";
import { Link } from "react-router-dom";
import "./Movielist.css";

function Movie({ movie }) {
  return (
    <Link to={{ pathname: `movie/${movie.id}`, state: movie }}>
      <div className="item">
        <img src={movie.medium_cover_image} alt={movie.title} />
        <div className="movie__header">
          <div className="movieitem__title">{movie.title}</div>
          <div className="movieitem__rating">{"Rating: " + movie.rating}</div>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
