import ListPendingChat from "../component/pending-chat/list-chat";
import ProfileUserPending from "../component/pending-chat/profile";
import {useState} from 'react';

function PendingChat() {

    const [userPendingChat, setUserPendingChat] = useState({});

    return (
        <div className="pending-chat">
            <div className="list-pending-container">
                <ListPendingChat
                    setUserPendingChat={setUserPendingChat}
                />
            </div>
            <div className="profile-window-container">
                <ProfileUserPending
                    userPendingChat={userPendingChat}
                />
            </div>
        </div>
    )
}

export default PendingChat;