import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }
  async getMovies() {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  // getMovies = async () => {
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  // };

  componentDidMount() {
    this.getMovies();
    
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are Ready"}</div>;
  }
}

export default App;
