import ListChat from "../component/home/list-chat";
import ChatWindow from "../component/home/chat-window";
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {

    const location = useLocation();

    const [userChat, setUserChat] = useState({});

    useEffect(() => {
        setUserChat(location.state)
    }, [location])

    return (
        <div className="home">
            <div className="list-chat-container">
                <ListChat
                    setUserChat={setUserChat}
                    chatRoom={userChat?.id}
                />
            </div>
            <div className="chat-window-container">
                <ChatWindow
                    userChat={userChat}
                />
            </div>
        </div>
    )
}

export default Home;