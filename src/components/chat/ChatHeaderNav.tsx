import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaBars, FaSearch } from 'react-icons/fa';
import withHeaderNavHoC from '../common/withHeaderNavHoC';

const ChatNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1vh;
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
    senderName: string;
}

const ChatNavPresenter: React.FC<IProps> = ({ senderName }) => (
    <ChatNavWrapper>
        <Left>
            <FaArrowLeft fontSize={20} />
            <h1>{senderName}</h1>
        </Left>
        <Right>
            <FaSearch fontSize={20} />
            <FaBars fontSize={20} />
        </Right>
    </ChatNavWrapper>
);

export default withHeaderNavHoC(ChatNavPresenter);
