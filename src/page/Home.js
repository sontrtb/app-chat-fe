import ListChat from "../component/home/ListChat";
import ChatWindow from "../component/home/ChatWindow";

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