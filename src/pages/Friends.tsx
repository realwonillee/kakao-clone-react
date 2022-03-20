import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ProfileImage from '../../public/profile.png';
import BodyWrapper from '../components/common/BodyWrapper';
import FriendsHeaderNav from '../components/friends/FriendsHeaderNav';
import FriendsList from '../components/friends/FriendsList';
import FriendsFooterNav from '../components/friends/FriendsFooterNav';

const defaultFriendsList: IFriendsListItem[] = [
    { id: 1, profile_image: ProfileImage, name: '원일', nick_name: 'RealWonIlLee', created_at: '작년 12월' } as IFriendsListItem,
];
const defaultResponseData: IResponseData = { ok: true, data: defaultFriendsList, error: null };

function FriendsContainer() {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        const { ok, data, error } = defaultResponseData;
        if (ok) {
            setFriendsList(data);
        } else {
            alert(error);
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Kakao | Chats</title>
                {
                    <style>
                        {`
                            body {
                                max-height: 100vh;
                                padding: 0px;
                            }
                        `}
                    </style>
                }
            </Helmet>
            <BodyWrapper>
                <FriendsHeaderNav headerName={'Friends'} />
                <FriendsList friendsList={friendsList} />
                <FriendsFooterNav />
            </BodyWrapper>
        </>
    );
}

export default FriendsContainer;
