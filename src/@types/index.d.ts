declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

interface IChatMessageList {
    chatMessageList: IChatMessageListItem[];
}

interface IChatMessageListItem {
    id: number;
    message: string;
    sender: string;
    profile_image: string;
    created_at: string;
}

interface IFriendsList {
    friendsList: IFriendsListItem[];
}

interface IFriendsListItem {
    id: number;
    profile_image: string;
    name: string;
    nick_name: string;
    created_at: string;
}

interface IResponseData {
    ok: boolean;
    data: any;
    error: string;
}
