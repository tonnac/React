import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
  leftBody() {
    const { movie } = this.props;

    return <div>leftBody</div>;
  }

  rightBody() {
    const { movie } = this.props;

    return (
      <div className="bodyitem__rightBody">
        <h1>{`Rating: ${movie.rating}`}</h1>
        <div>Genres</div>
        <ul className="movie__genres">
          {movie.genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h2>{`Runtime: ${movie.runtime}`}</h2>
        <h2>{`Year: ${movie.year}`}</h2>
      </div>
    );
  }

  render() {
    const { movie } = this.props;
    return movie ? (
      <div className="pBody">
        <div className="bodyitem__leftBody">{this.leftBody()}</div>
        {this.rightBody()}
      </div>
    ) : null;
  }
}

export default Body;
