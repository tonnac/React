import React from "react";

function Food(props) {
  return <h1>I like {props.fav}</h1>;
}

function App() {
  return (
    <div>
      Hello!!!!
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chikumi" />
    </div>
  );
}

export default App;
