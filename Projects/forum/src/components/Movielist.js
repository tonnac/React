import React from "react";
import { Link } from "react-router-dom";
import "./Movielist.css";

function Movie({ movie }) {
  return (
    <tr>
      <td>{movie.id}</td>
      <td>
        <Link to={{ pathname: `movie/${movie.id}`, state: movie }}>
          {movie.title}
        </Link>
      </td>
      <td>{movie.date_uploaded}</td>
    </tr>
  );
}

export default Movie;
