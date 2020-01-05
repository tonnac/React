import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 5px;
  ${awesomeCard};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Input placeholder="Input your name." />
      </Container>
    </>
  );
}

export default App;
