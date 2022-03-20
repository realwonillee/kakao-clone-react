import React from 'react';
import styled from 'styled-components';
import { StatusBar } from './StatusBar';

const HeaderNavWrapper = styled.nav`
    position: sticky;
    z-index: 2;
    top: 0px;
    width: 100%;
    padding: 10px 20px;
    background-color: white;
    box-shadow: 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    margin-bottom: 3vh;
`;

const withHeaderNavHoC = (WrappedComponent: React.FC<any>) => {
    return (props: any) => {
        return (
            <HeaderNavWrapper>
                <StatusBar agency={'KT'} />
                <WrappedComponent {...props} />
            </HeaderNavWrapper>
        );
    };
};

export default withHeaderNavHoC;
