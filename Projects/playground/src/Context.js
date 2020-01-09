import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Test(props) {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return <li>I am styled by theme context!</li>;
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  return (
    <ul>
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </ul>
  );
}
