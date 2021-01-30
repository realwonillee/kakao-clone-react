import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaClock, FaWifi, FaBatteryFull, FaSignal } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  opacity: 0.7;

  span {
    font-size: 14px;
    vertical-align: top;
  }
`;

const Left = styled.div`
  width: 20%;
  span {
    margin: 0 3px;
  }
`;
const Center = styled.div``;
const Right = styled.div`
  width: 20%;
  text-align: right;

  svg {
    margin: 0 2px;
  }
`;

interface IProps {
  agency: string;
}

export const StatusBar: React.FC<IProps> = ({ agency }) => {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");

  const timer = (): void => {
    const date = new Date();
    setHours(date.getHours().toString());
    setMinutes(date.getMinutes().toString());
  };

  useEffect(() => {
    timer();
    setInterval(timer, 1000);
  });

  return (
    <Wrapper>
      <Left>
        <FaSignal fontSize={14} />
        <span>{agency}</span>
        <FaWifi fontSize={14} />
      </Left>
      <Center>
        <span>
          {hours}:{minutes}
        </span>
      </Center>
      <Right>
        <FaClock fontSize={14} />
        <FaBatteryFull fontSize={14} />
      </Right>
    </Wrapper>
  );
};
