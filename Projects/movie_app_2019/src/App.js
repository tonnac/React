import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }
  async getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=download_count",
      // "https://yts.lt/api/v2/list_movies.json?sort_by=download_count",
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  renderMovies = () => {
    const { movies } = this.state;
    return movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      );
    });
  };

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : this.renderMovies()}</div>;
  }
}

export default App;
