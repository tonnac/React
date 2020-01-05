import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Button>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor href="http://google.com">Go to google</Anchor>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
