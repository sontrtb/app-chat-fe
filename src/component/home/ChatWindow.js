import InputMessager from "./InputMessager";
import MessagerList from "./MessagerList";

function ChatWindow() {

    return(
        <div className="chat-window">
            <MessagerList />
            <InputMessager />
        </div>
    )
}

export default ChatWindow;