import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaComment, FaCog } from 'react-icons/fa';
import withHeaderNavHoC from '../common/withHeaderNavHoC';

const Wrapper = styled.header`
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
    headerName: string;
}

const FriendsHeaderNav: React.FC<IProps> = ({ headerName }) => (
    <Wrapper>
        <Left>
            <h1>{headerName}</h1>
        </Left>
        <Right>
            <FaSearch fontSize={20} />
            <FaComment fontSize={20} />
            <FaCog fontSize={20} />
        </Right>
    </Wrapper>
);

export default withHeaderNavHoC(FriendsHeaderNav);
