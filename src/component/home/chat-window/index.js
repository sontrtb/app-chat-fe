import InputMessager from "./InputMessager";
import MessagerList from "./MessagerList";
import HeaderChatWindow from "./HeaderChatWindows";

import { useState } from 'react';

function ChatWindow() {

    const [listMessage, setListMessage] = useState([]);

    return(
        <div className="chat-window">
            <HeaderChatWindow
            
            />

            <MessagerList
                listMessage={listMessage}
            />

            <InputMessager
                setListMessage={setListMessage}
            />
        </div>
    )
}

export default ChatWindow;