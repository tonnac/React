import React, { useCallback, useState } from "react";
import Dropdown from "./Dropdown";
import Tooltip from "./tooltip";
import Btn from "./Btn";
import styled from "styled-components";

const Div = styled.div`
  height: 940px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;

export default function App() {
  const [btn, setBtn] = useState({ rect: null, text: null });
  const handleOnMouseLeave = useCallback(e => {
    setBtn({ rect: null, text: null });
  }, []);

  const handleOnMouseOver = e => {
    const { currentTarget } = e;
    setBtn({
      rect: currentTarget.getBoundingClientRect(),
      text: currentTarget.dataset.txt
    });
  };

  return (
    <div>
      <Tooltip data={btn} />
      <Div>
        <Column>
          <Btn
            data-txt="This is Tooltip Text123123123"
            id="btn1"
            text="Click me"
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
          />
          <Btn
            data-txt="This is Tooltip Text1"
            id="btn1"
            text="Click me"
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
          />
        </Column>
        <Column>
          <Btn
            data-txt="This is Tooltip Text2232"
            id="btn1"
            text="Click me"
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
          />
          <Btn
            data-txt="This is Tooltip "
            id="btn1"
            text="Click me"
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
          />
        </Column>
      </Div>
    </div>
  );
}
