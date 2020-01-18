import React, { useState, useCallback } from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
const App: React.FC = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <>
      <Route path="/:category?" component={NewsPage} />
    </>
  );
};

export default App;
