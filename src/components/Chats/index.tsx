import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header, DefaultNav as Nav, StatusBar } from "../Common";
import ProfileImage from "../../../public/profile.png";
import styled from "styled-components";

const Main = styled.main`
  img {
    width: 60px;
    border-radius: 25%;
    margin-right: 15px;
  }
`;

const FriendRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FriendColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FriendName = styled.div`
  margin-bottom: 5px;
  font-weight: 350;
`;

const FriendText = styled.div`
  opacity: 0.7;
  font-size: 12px;
  font-weight: 300;
`;

const ChatTime = styled.span`
  opacity: 0.7;
  font-size: 12px;
  font-weight: 300;
`;

const Presenter: React.FC = (_) => (
  <>
    <Helmet>
      <title>Kakao | Chats</title>
    </Helmet>
    <StatusBar agency={"KT"} />
    <Header header_name={"Chats"} />
    <Main>
      <ul>
        <li>
          <Link to={"/chat"}>
            <FriendRow>
              <FriendColumn>
                <img src={ProfileImage} />
                <div>
                  <FriendName>원일</FriendName>
                  <FriendText>RealWonIlLee</FriendText>
                </div>
              </FriendColumn>
              <FriendColumn>
                <ChatTime>작년 12월</ChatTime>
              </FriendColumn>
            </FriendRow>
          </Link>
        </li>
      </ul>
    </Main>
    <Nav />
  </>
);

export default Presenter;
