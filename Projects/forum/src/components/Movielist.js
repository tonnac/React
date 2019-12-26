import React from "react";
import "./Movielist.css";

function Movie({ movie, onClick }) {
  return (
    <button onClick={() => onClick(movie)}>
      <div className="item">
        <img src={movie.medium_cover_image} alt={movie.title} />
        <div className="movie__header">
          <div className="movieitem__title">{movie.title}</div>
          <div className="movieitem__rating">{"Rating: " + movie.rating}</div>
        </div>
      </div>
    </button>
  );
}

export default Movie;
