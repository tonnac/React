import React from "react";

function Movie({ movie }) {
  return (
    <tr>
      <td>{movie.id}</td>
      <td>{movie.title}</td>
      <td>{movie.date_uploaded}</td>
    </tr>
  );
}

export default Movie;
