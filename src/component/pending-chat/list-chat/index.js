import ListChatItem from "./ListChatItem";
import { getPendingChat } from "../../../api/apiMessage";
import { useState, useEffect } from "react";

function ListPendingChat({setUserChat}) {

    const [listChat, setListChat] = useState([]);

    useEffect(() => {
        getPendingChat((res, err) => {
            if(res)
                setListChat(res.data)
        })
    }, [])

    return(
        <div className="list-chat">
            {
                listChat.map(chatItem => (
                        <div
                            key={chatItem.room_id}
                            onClick={() => setUserChat(chatItem)}
                        >
                            <ListChatItem
                                chatItem={chatItem}
                            />
                        </div>
                    ))
            }
            {
                listChat.length === 0 && (
                    <div className="text-no-friend">
                        Bạn không có tin nhắn chờ
                    </div>
                )
            }
        </div>
    )
}

export default ListPendingChat;