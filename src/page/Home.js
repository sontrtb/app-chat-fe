import ListChat from "../component/home/list-chat";
import ChatWindow from "../component/home/chat-window";

function Home() {

    return (
        <div className="home">
            <div className="list-chat-container">
                <ListChat />
            </div>
            <div className="chat-window-container">
                <ChatWindow />
            </div>
        </div>
    )
}

export default Home;