import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUser, FaComment, FaSearch, FaEllipsisH } from "react-icons/fa";

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  background-color: #fcfcfc;
  padding: 20px 50px;
  left: 0px;
  bottom: 0px;
  border-top: 1px solid #f7f7f7;
  font-weight: 900;

  ul {
    display: flex;
    justify-content: space-between;

    li {
      cursor: pointer;

      &:nth-child(2) {
        position: relative;
      }

      div {
        position: absolute;
        top: -7px;
        right: -7px;
        font-size: 10px;
        font-weight: 300;
        color: white;
        background-color: #dc5d46;
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }
  }
`;

export const DefaultNav: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={"/friends"}>
            <FaUser fontSize={20} />
          </Link>
        </li>
        <li>
          <Link to={"/chats"}>
            <div>8</div>
            <FaComment fontSize={20} />
          </Link>
        </li>
        <li>
          <Link to={"/search"}>
            <FaSearch fontSize={20} />
          </Link>
        </li>
        <li>
          <Link to={"/setting"}>
            <FaEllipsisH fontSize={20} />
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};
