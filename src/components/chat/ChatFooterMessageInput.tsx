import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusSquare, FaSmileWink, FaMicrophone } from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: sticky;

    width: 100%;
    background-color: #fcfcfc;
    padding: 15px;
    left: 0px;
    bottom: 0px;
    border-top: 1px solid #f7f7f7;
    font-weight: 900;

    display: flex;
    justify-content: space-between;

    div {
        width: 10%;
        text-align: center;

        &:nth-child(2) {
            width: 65%;
        }
    }

    input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none;
        padding: 5px 0;
        font-size: 12px;
        width: 100%;
    }
`;

const ChatMessageInput: React.FC = () => {
    return (
        <Wrapper>
            <div>
                <Link to={'/friends'}>
                    <FaPlusSquare fontSize={20} />
                </Link>
            </div>
            <div>
                <input type={'text'} />
            </div>
            <div>
                <Link to={'/search'}>
                    <FaSmileWink fontSize={20} />
                </Link>
            </div>
            <div>
                <Link to={'/setting'}>
                    <FaMicrophone fontSize={20} />
                </Link>
            </div>
        </Wrapper>
    );
};

export default ChatMessageInput;
