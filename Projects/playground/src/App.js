import React from "react";
import Dropdown from "./Dropdown";
import { data } from "./Data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: { date: false, number: true },
      w: [],
      location: [
        {
          title: "New York",
          selected: false
        },
        {
          title: "Dublin",
          selected: false
        },
        {
          title: "California",
          selected: false
        },
        {
          title: "Istanbul",
          selected: false
        }
      ]
    };
  }

  soort(key) {
    for (let key in this.state.sort) {
      this.state.w.push(key);
    }

    console.log(this.state.sort[key]);
  }

  render() {
    console.log(data);
    return (
      <input
        name="dds"
        onChange={e => {
          e.preventDefault();
          console.log(e.target.name);
        }}
      ></input>
    );
  }
}

export default App;
