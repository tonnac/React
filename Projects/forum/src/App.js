import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      endNumber: 100,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  pageUpdate() {
    console.log("Page");
  }

  loadData() {
    var i = 0;
    const { endNumber } = this.state;
    do {
      i++;
      const page = i;
      const fileUrl = `https://yts-proxy.now.sh/list_movies.json?page=${page}`;
      axios.get(fileUrl).then(data => {
        data.data.data.movies.forEach(movie => {
          this.setState({
            movies: this.state.movies.concat(movie),
          });
          this.pageUpdate();
        });
        if (this.state.isLoading === true && this.state.movies.length > 20) {
          this.setState({ isLoading: false });
        }
      });
    } while (i < endNumber);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Complete"}</div>;
  }
}

export default App;
