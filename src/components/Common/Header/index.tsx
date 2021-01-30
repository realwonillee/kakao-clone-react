import React from "react";
import styled from "styled-components";
import { FaSearch, FaComment, FaCog } from "react-icons/fa";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: 900;

  h1 {
    font-size: 24px;
  }
`;

const Left = styled.div`
  width: 20%;
  span {
    margin: 0 3px;
  }
`;

const Right = styled.div`
  text-align: right;
  svg {
    margin-left: 20px;
  }
`;

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <h1>Chats</h1>
      </Left>
      <Right>
        <FaSearch fontSize={20} />
        <FaComment fontSize={20} />
        <FaCog fontSize={20} />
      </Right>
    </Wrapper>
  );
};
