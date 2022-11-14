import ListChat from "../component/home/list-chat";
import ChatWindow from "../component/home/chat-window";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ws } from "../socket/config";

function Home() {

    const location = useLocation();

    const [userChat, setUserChat] = useState({});
    const [messageSocket, setMessageSocket] = useState({});
    const [listMessageSocket, setListMessSocket] = useState({});

    useEffect(() => {
        setUserChat(location.state)
    }, [location])

    ws.onmessage = (e) => {
        const dataMessSocket = JSON.parse(e.data);

        if(userChat?.id === dataMessSocket.room)
            setMessageSocket(dataMessSocket);
        
        setListMessSocket(dataMessSocket);    
    };

    return (
        <div className="home">
            <div className="list-chat-container">
                <ListChat
                    setUserChat={setUserChat}
                    chatRoom={userChat?.id}
                    listMessageSocket={listMessageSocket}
                />
            </div>
            <div className="chat-window-container">
                <ChatWindow
                    userChat={userChat}
                    messageSocket={messageSocket}
                />
            </div>
        </div>
    )
}

export default Home;