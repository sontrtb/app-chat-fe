import MessagerList from "./MessagerList";
import HeaderChatWindow from "./HeaderChatWindows";

function ChatWindow({userChat}) {

    return(
        <div className="chat-window">
            <HeaderChatWindow
                userChat={userChat}
            />

            <MessagerList
                userChat={userChat}
            />

        </div>
    )
}

export default ChatWindow;