import MessagerList from "./MessagerList";
import HeaderChatWindow from "./HeaderChatWindows";
import bannerChat from "../../../access/image/banner_chat_1.png";

function ChatWindow({userChat, messageSocket}) {

    return(
        <div>
            {
                userChat ?
                <div className="chat-window">
                     <HeaderChatWindow
                        userChat={userChat}
                    />
                    <MessagerList
                        userChat={userChat}
                        messageSocket={messageSocket}
                    />
                </div> :
                <img
                    src={bannerChat}
                    alt="anh cho"
                    className="image-no-mess"
                />  
            }
           

        </div>
    )
}

export default ChatWindow;