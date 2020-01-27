import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  background: lightcoral;
  :not(:hover) {
    overflow: hidden;
  }
  text-overflow: ellipsis;
`;

export default function Spantest() {
  return (
    <Div>
      <span>asdasdnasdaskjdansjdkasndjkasndkjasndakjsdnasjkdnsakj</span>
    </Div>
  );
}
