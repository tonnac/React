import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navgation from "./components/Navigation";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* <Navgation /> */}
      <Route path="/movie/:id" component={Detail} />
      <Route path="/" exact={true} component={Home} />
    </HashRouter>
  );
}

export default App;
