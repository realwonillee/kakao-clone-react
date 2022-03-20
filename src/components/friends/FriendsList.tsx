import React from 'react';
import styled from 'styled-components';
import FriendsListItem from './FriendsListItem';

const FriendsListWrapper = styled.ul`
    padding: 10px 15px;

    img {
        width: 60px;
        border-radius: 25%;
        margin-right: 15px;
    }
`;

const FriendsList: React.FC<IFriendsList> = ({ friendsList }) => (
    <FriendsListWrapper>
        {friendsList.map((item) => (
            <FriendsListItem key={item.id} friendsListItem={item} />
        ))}
    </FriendsListWrapper>
);

export default FriendsList;
