import React from "react";
import axios from "axios";
import Movie from "./Movielist";
import Tablehead from "./Tablehead";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      endNumber: 5,
      currentPage: 1,
      sort: { date: true, title: true, number: true },
    };
  }

  compareFunc(type, minus) {
    switch (type) {
      case "number":
        return (a, b) => {
          const nameA = a.id;
          const nameB = b.id;
          if (nameA < nameB) {
            return -1 * minus;
          }
          if (nameA >= nameB) {
            return 1 * minus;
          }
        };
      case "title":
        return (a, b) => {
          const nameA = a.title;
          const nameB = b.title;
          if (nameA < nameB) {
            return -1 * minus;
          }
          if (nameA >= nameB) {
            return 1 * minus;
          }
        };
      case "date":
        return (a, b) => {
          const nameA = a.date_uploaded;
          const nameB = b.date_uploaded;
          if (nameA < nameB) {
            return -1 * minus;
          }
          if (nameA >= nameB) {
            return 1 * minus;
          }
        };
    }
  }

  sortList(type) {
    let sort = this.state.sort;
    sort[type] = !sort[type];

    let movies = this.state.movies;
    const minus = sort[type] ? 1 : -1;

    movies.sort(this.compareFunc(type, minus));

    this.setState({
      movies,
      sort,
    });
  }

  tableBody() {
    let rows = [];
    const { currentPage } = this.state;
    let movies = this.state.movies.slice(
      (currentPage - 1) * 20,
      currentPage * 20,
    );

    movies.forEach((movie, index) => {
      rows.push(<Movie key={index} movie={movie} />);
    });
    return <tbody>{rows}</tbody>;
  }

  pageNumber(props) {
    const page = this.state.movies.length / 20;
    let rows = [];
    for (let i = 0; i < page; ++i) {
      rows.push(
        <button key={i} onClick={() => this.pageClick(i + 1)}>
          {i + 1}
        </button>,
      );
    }
    return rows;
  }

  pageClick(i) {
    this.setState({
      currentPage: i,
    });
  }
  showMovieList() {
    return (
      <div>
        <table border="1">
          <Tablehead callback={this.sortList.bind(this)} />
          {this.tableBody()}
        </table>
        <div>{this.pageNumber()}</div>
      </div>
    );
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
      const fileUrl = `https://yts-proxy.now.sh/list_movies.json?page=${i}`;
      axios.get(fileUrl).then(data => {
        const movies = data.data.data.movies;

        data.data.data.movies.forEach(movie => {
          this.setState({
            movies: this.state.movies.concat(movie),
          });
        });
        // this.pageUpdate();
        if (
          this.state.isLoading === true &&
          this.state.movies.length >= endNumber * 20
        ) {
          this.setState({ isLoading: false });
          {
            /* TODO {First Page Render} */
          }
        }
      });
    } while (i < endNumber);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : this.showMovieList()}</div>;
  }
}

export default App;
