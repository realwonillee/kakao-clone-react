import React from "react";
import styled from "styled-components";
import { FaArrowLeft, FaBars, FaSearch, FaComment, FaCog } from "react-icons/fa";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: 500;

  h1 {
    font-size: 24px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 15px;
  }
`;

const Right = styled.div`
  text-align: right;
  svg {
    margin-left: 20px;
  }
`;

interface IProps {
  header_name: string;
}

const ChatHeader: React.FC<IProps> = ({ header_name }) => (
  <Wrapper>
    <Left>
      <FaArrowLeft fontSize={20} />
      <h1>{header_name}</h1>
    </Left>
    <Right>
      <FaSearch fontSize={20} />
      <FaBars fontSize={20} />
    </Right>
  </Wrapper>
);

const ChatsHeader: React.FC<IProps> = ({ header_name }) => (
  <Wrapper>
    <Left>
      <h1>{header_name}</h1>
    </Left>
    <Right>
      <FaSearch fontSize={20} />
      <FaComment fontSize={20} />
      <FaCog fontSize={20} />
    </Right>
  </Wrapper>
);

export const Header: React.FC<IProps> = ({ header_name }) => {
  switch (header_name) {
    case "Chats":
      return <ChatsHeader header_name={header_name} />;
    default:
      return <ChatHeader header_name={header_name} />;
  }
};
