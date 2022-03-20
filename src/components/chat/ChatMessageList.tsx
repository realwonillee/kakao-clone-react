import React from 'react';
import styled from 'styled-components';
import ChatMessageListItem from './ChatMessageListItem';

const ChatMessageListWrapper = styled.ul`
    flex: 1 1;
    padding: 0 20px;
    img {
        width: 45px;
        border-radius: 25%;
        margin-right: 15px;
    }
    text-align: center;
`;

const ChatMessageList: React.FC<IChatMessageList> = ({ chatMessageList }) => (
    <ChatMessageListWrapper>
        {chatMessageList.map((item) => (
            <ChatMessageListItem key={item.id} chatMessageItem={item} />
        ))}
    </ChatMessageListWrapper>
);

export default ChatMessageList;
