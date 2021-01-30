import React from "react";
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
        color: white;
        background-color: #dc5d46;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }
  }
`;

export const Nav: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <FaUser fontSize={20} />
        </li>
        <li>
          <div>8</div>
          <FaComment fontSize={20} />
        </li>
        <li>
          <FaSearch fontSize={20} />
        </li>
        <li>
          <FaEllipsisH fontSize={20} />
        </li>
      </ul>
    </Wrapper>
  );
};
