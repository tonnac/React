import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: none;
  width: 200px;
  height: 200px;
  background: black;
  color: white;
  /* opacity: 0; */

  transition: opacity 3.2s ease-in-out;
  ${props => (props.toggle ? `opacity : 1;` : "opacity : 0;")}
`;

const Container = ({ toggle, children, setActive }) => {
  return (
    <Wrapper
      onTransitionEnd={e => {
        if (!toggle) {
          setActive(false);
        }
      }}
      className={toggle ? "wrap" : "p"}
      toggle={toggle}
    >
      {children}
    </Wrapper>
  );
};

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) {
      setToggle(true);
    }
  }, [active]);

  return (
    <>
      {active && (
        <Container setActive={setActive} toggle={toggle}>
          Hello
        </Container>
      )}
      <button
        style={{ opacity: 1 }}
        onClick={() => {
          active === false ? setActive(true) : setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </>
  );
}
