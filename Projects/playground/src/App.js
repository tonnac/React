import React from "react";

function Testprops(props) {
  const { count } = props;
  return <div>{count}</div>;
}
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: { date: false, number: true },
      w: []
    };
  }

  soort(key) {
    for (let key in this.state.sort) {
      this.state.w.push(key);
    }

    console.log(this.state.sort[key]);
  }

  render() {
    return <Testprops count="5" />;
  }
}

export default App;
