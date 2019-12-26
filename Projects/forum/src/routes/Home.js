import React from "react";
import axios from "axios";
import List from "../components/List";
import PageNumber from "../components/PageNumber";
import Headline from "../components/Headline";
import Body from "../components/Body";
import "./Home.css";

function Tablehead({ onClick }) {
  return (
    <thead>
      <tr>
        <th>
          <button onClick={() => onClick("id")}>번호</button>
        </th>
        <th>
          <button onClick={() => onClick("title")}>제목</button>
        </th>
        <th>
          <button onClick={() => onClick("date_uploaded")}>날짜</button>
        </th>
      </tr>
    </thead>
  );
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      endNumber: 5,
      currentPage: 1,
      sort: { date_uploaded: true, title: true, id: true },
      pagePerCount: 10,
      currentMovie: null,
    };
  }

  compareFunc(type, sign) {
    return (a, b) => {
      const A = a[type];
      const B = b[type];
      if (A < B) {
        return -sign;
      }
      if (A >= B) {
        return sign;
      }
    };
  }

  sortList(type) {
    let sort = this.state.sort;
    sort[type] = !sort[type];

    let movies = this.state.movies;
    const sign = sort[type] ? 1 : -1;

    movies.sort(this.compareFunc(type, sign));

    this.setState({
      movies,
      sort,
    });
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    var i = 0;
    const { endNumber } = this.state;
    do {
      i++;
      const fileUrl = `https://yts-proxy.now.sh/list_movies.json?page=${i}`;
      axios.get(fileUrl).then(data => {
        const movies = data.data.data.movies;

        movies.forEach(movie => {
          this.setState({
            movies: this.state.movies.concat(movie),
          });
        });
        if (
          this.state.isLoading === true &&
          this.state.movies.length >= endNumber * 20
        ) {
          this.setState({ isLoading: false });
        }
      });
    } while (i < endNumber);
  }

  executeApp() {
    return (
      <div className="backGround">
        <Headline
          page={this.state.currentPage}
          results={this.state.movies.length}
        />
        <Body movie={this.state.currentMovie} />
        <List
          pagePerCount={this.state.pagePerCount}
          movies={this.state.movies}
          currentPage={this.state.currentPage}
          onClick={movie => {
            this.setState({
              currentMovie: movie,
            });
          }}
        />
        <PageNumber
          pagePerCount={this.state.pagePerCount}
          movies={this.state.movies}
          onClick={i => {
            this.setState({
              currentPage: i + 1,
            });
          }}
        />
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <div>Loading...</div> : this.executeApp();
  }
}

export default Home;
