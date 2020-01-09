import React from "react";
import styled from "styled-components";
import { DownArrow } from "./Icons";

const Ul = styled.ul`
  list-style: none;
  margin: 5px;
  padding: 5px;
`;

const Li = styled.li`
  list-style-type: none;
`;

const Wrapper = styled.div``;

const Title = styled.span`
  border: 1px solid #5f5f5f;
  padding: 5px 5px;
`;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOpen: false
    };
  }

  render() {
    const { title, list } = this.props;
    const { listOpen } = this.state;

    return (
      <Wrapper>
        <Title
          onClick={() => {
            this.setState({ listOpen: !listOpen });
          }}
        >
          {title}
          <DownArrow rotValue={listOpen ? 180 : 0} />
        </Title>
        {listOpen && (
          <Ul>
            {list.map((item, index) => (
              <Li
                key={index}
                onClick={() => {
                  this.setState({ listOpen: false });
                }}
              >
                {item.title}
              </Li>
            ))}
          </Ul>
        )}
      </Wrapper>
    );
  }
}

export default Dropdown;
