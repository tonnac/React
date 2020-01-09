import React from "react";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./Components/Todos";

const App: React.FC = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
