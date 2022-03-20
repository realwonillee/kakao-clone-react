import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../public/profile.png';

const IncomeMessage = styled.li`
    margin-top: 30px;
    display: flex;
    align-self: flex-start;
`;

const MessageContent = styled.div``;

const MessageBubble = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 7px;
    font-size: 12px;
    margin-bottom: 7px;
`;

const MessageAuthor = styled.div`
    text-align: left;
    font-size: 12px;
`;

const SentMessage = styled.li`
    display: flex;
    justify-content: end;
    margin-top: 30px;
    font-size: 12px;
    font-weight: 300;
`;

const ChatTime = styled.span`
    background-color: #fff;
    padding: 5px;
    border-radius: 7px;
    opacity: 0.7;
    font-size: 12px;
    font-weight: 400;
`;

interface IProps {
    chatMessageItem: any;
}

const ChatMessageListItem: React.FC<IProps> = ({ chatMessageItem }) => {
    const { created_at, message, sender, profile_image } = chatMessageItem;
    return !sender ? (
        <>
            <ChatTime>{created_at}</ChatTime>
            <SentMessage>
                <MessageContent>
                    <MessageBubble>{message}</MessageBubble>
                </MessageContent>
            </SentMessage>
        </>
    ) : (
        <>
            <ChatTime>{created_at}</ChatTime>
            <IncomeMessage>
                <img src={profile_image} />
                <MessageContent>
                    <MessageBubble>{message}</MessageBubble>
                    <MessageAuthor>{sender}</MessageAuthor>
                </MessageContent>
            </IncomeMessage>
        </>
    );
};

export default ChatMessageListItem;
