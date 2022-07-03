import ListChatItem from "./ListChatItem";
import { getListChat } from "../../../api/apiMessage";
import { useState, useEffect } from "react";

function ListChat({ setUserChat, chatRoom }) {

    const [listChat, setListChat] = useState([]);

    useEffect(() => {
        getListChat((res, err) => {
            if(res)
                setListChat(res.data)
        })
    }, [])

    return(
        <div className="list-chat">
            {
                listChat.map(chatItem => {
                    const dataChat = {
                        id: chatItem.room_id,
                        name: chatItem.name,
                        avatar: chatItem.avatar,
                    }
                    return (
                        <div
                            key={chatItem.room_id}
                            onClick={() => setUserChat(dataChat)}
                        >
                            <ListChatItem
                                chatItem={chatItem}
                                chatRoom={chatRoom}
                            />
                        </div>
                    )
                })
            }
            {
                listChat.length === 0 && (
                    <div className="text-no-friend">
                        Bạn chưa nhắn tin với ai, vào mục "Mọi người" để tìm kiếm bạn bè của mình nhé !!!
                    </div>
                )
            }
        </div>
    )
}

export default ListChat;