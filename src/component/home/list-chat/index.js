import ListChatItem from "./ListChatItem";
import { getListChat } from "../../../api/apiMessage";
import { useState, useEffect } from "react";

function ListChat() {

    const [listChat, setListChat] = useState([]);

    useEffect(() => {
        getListChat((res, err) => {
            if(res)
                console.log(res)
        })
    }, [])

    return(
        <div className="list-chat">
            {
                listChat.map(chatItem => (
                    <div>
                        <ListChatItem chatItem={chatItem}/>
                    </div>
                ))
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