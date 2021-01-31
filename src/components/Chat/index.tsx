import React from "react";
import { Helmet } from "react-helmet";
import { Header, ChatNav as Nav, StatusBar } from "../Common";
import ProfileImage from "../../../public/profile.png";
import Background from "../../../public/bg.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: sticky;
  z-index: 2;
  top: 0px;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  margin-bottom: 30px;
`;

const Main = styled.main`
  min-height: 1000vh;
  padding: 0 20px;
  img {
    width: 45px;
    border-radius: 25%;
    margin-right: 15px;
  }
`;

const ChatWrapper = styled.ul`
  text-align: center;
`;

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

const Presenter: React.FC = (_) => (
  <>
    <Helmet>
      <title>Kakao | Chat</title>
      {
        <style>
          {`
        body {
          background-image: url(${Background});
          padding: 0px;
        }
        `}
        </style>
      }
    </Helmet>
    <HeaderWrapper>
      <StatusBar agency={"KT"} />
      <Header header_name={"원일"} />
    </HeaderWrapper>
    <Main>
      <ChatWrapper>
        <ChatTime>(오늘) 오전 8:48</ChatTime>
        <IncomeMessage>
          <img src={ProfileImage} />
          <MessageContent>
            <MessageBubble>ㅎㅇ</MessageBubble>
            <MessageAuthor>원일</MessageAuthor>
          </MessageContent>
        </IncomeMessage>
        <SentMessage>
          <MessageContent>
            <MessageBubble>ㅇㅇ</MessageBubble>
          </MessageContent>
        </SentMessage>
        <IncomeMessage>
          <img src={ProfileImage} />
          <MessageContent>
            <MessageBubble>뭐함? ㅋ</MessageBubble>
            <MessageAuthor>원일</MessageAuthor>
          </MessageContent>
        </IncomeMessage>
        <SentMessage>
          <MessageContent>
            <MessageBubble>그냥 있어 ㅎㅎㅎ</MessageBubble>
          </MessageContent>
        </SentMessage>
      </ChatWrapper>
    </Main>
    <Nav />
  </>
);

export default Presenter;
