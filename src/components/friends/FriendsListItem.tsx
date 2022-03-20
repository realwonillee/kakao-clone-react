import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

interface IProps {
    friendsListItem: IFriendsListItem;
}

const FriendsListItem: React.FC<IProps> = ({ friendsListItem }) => {
    const { name, nick_name, profile_image, created_at } = friendsListItem;
    return (
        <li>
            <Link to={'/chat'}>
                <FriendRow>
                    <FriendColumn>
                        <img src={profile_image} />
                        <div>
                            <FriendName>{name}</FriendName>
                            <FriendText>{nick_name}</FriendText>
                        </div>
                    </FriendColumn>
                    <FriendColumn>
                        <ChatTime>{created_at}</ChatTime>
                    </FriendColumn>
                </FriendRow>
            </Link>
        </li>
    );
};

export default FriendsListItem;
