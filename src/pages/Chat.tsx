import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ProfileImage from '../../public/profile.png';
import Background from '../../public/bg.png';
import ChatHeaderNav from '../components/chat/ChatHeaderNav';
import ChatMessageList from '../components/chat/ChatMessageList';
import ChatFooterMessageInput from '../components/chat/ChatFooterMessageInput';
import BodyWrapper from '../components/common/BodyWrapper';

const defaultChatMessageList: IChatMessageListItem[] = [
    { id: 1, message: 'ㅎㅇ', sender: '원일', profile_image: ProfileImage, created_at: '(오늘) 오전 8:48' } as IChatMessageListItem,
    { id: 2, message: 'ㅇㅇ', sender: null, profile_image: null, created_at: '(오늘) 오전 8:48' } as IChatMessageListItem,
    { id: 3, message: '뭐함? ㅋ', sender: '원일', profile_image: ProfileImage, created_at: '(오늘) 오전 8:48' } as IChatMessageListItem,
    { id: 4, message: '그냥 있음 ㅎㅎ', sender: null, profile_image: null, created_at: '(오늘) 오전 8:48' } as IChatMessageListItem,
];

const defaultResponseData: IResponseData = { ok: true, data: defaultChatMessageList, error: null };

function ChatContainer() {
    const [chatMessageList, setChatMessagesList] = useState([]);

    const getChatMessageList = (): IResponseData => {
        return defaultResponseData;
    };

    useEffect(() => {
        const { ok, data, error } = getChatMessageList();
        if (ok) {
            setChatMessagesList(data);
        } else {
            alert(error);
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Kakao | Chat</title>
                {
                    <style>
                        {`
                            body {
                                background-image: url(${Background});
                                max-height: 100vh;
                                padding: 0px;
                            }
                        `}
                    </style>
                }
            </Helmet>
            <BodyWrapper>
                <ChatHeaderNav senderName={'WonilLee'} />
                <ChatMessageList chatMessageList={chatMessageList} />
                <ChatFooterMessageInput />
            </BodyWrapper>
        </>
    );
}

export default ChatContainer;
