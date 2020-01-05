import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    ${reset};
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    </>
  );
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default App;
