import React from "react";
import axios from "axios";
import Movie from "../components/Movielist";
import Headline from "../components/Headline";
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

function Tablebody(props) {
  let rows = [];
  const currentPage = props.currentPage;
  let movies = props.movies.slice((currentPage - 1) * 20, currentPage * 20);

  movies.forEach((movie, index) => {
    rows.push(<Movie key={index} movie={movie} />);
  });
  return <tbody>{rows}</tbody>;
}

function PageNumber(props) {
  const page = props.movies.length / 20;
  let rows = [];
  for (let i = 0; i < page; ++i) {
    rows.push(
      <button key={i} onClick={() => props.onClick(i)}>
        {i + 1}
      </button>,
    );
  }
  return rows;
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

  executeApp() {
    return (
      <div>
        <Headline
          page={this.state.currentPage}
          results={this.state.movies.length}
        />
        <table border="1">
          <Tablehead onClick={this.sortList.bind(this)} />
          <Tablebody
            movies={this.state.movies}
            currentPage={this.state.currentPage}
          />
        </table>
        <div>
          <PageNumber
            movies={this.state.movies}
            onClick={i => {
              this.setState({
                currentPage: i + 1,
              });
            }}
          />
        </div>
      </div>
    );
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

        data.data.data.movies.forEach(movie => {
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

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : this.executeApp()}</div>;
  }
}

export default Home;
