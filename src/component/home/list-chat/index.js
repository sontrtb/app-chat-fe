import ListChatItem from "./ListChatItem";
import { getListChat } from "../../../api/apiMessage";
import { useState, useEffect } from "react";
import ModalCreateGroup from "./ModalCreateGroup";
import {UsergroupAddOutlined} from "@ant-design/icons";
import { informationGroup } from "../../../api/apiGroup";

function ListChat({ setUserChat, chatRoom, listMessageSocket }) {

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [listChat, setListChat] = useState([]);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        getListChat((res, err) => {
            if(res)
                setListChat(res.data)
        })
    }, [reload])

    useEffect(() => {
        // if(listMessageSocket.id) {
        //     const params = {
        //         group_id: listMessageSocket.room,
        //     }
        //     informationGroup(params, (res, err) => {
        //         if(res) {
        //             console.log(res);
        //         }
        //     })
        // }
        if(listMessageSocket.id) {
            const arrDelete = listChat.filter(item => item.room_id!==listMessageSocket.room )
            const roomSocket = listChat.filter(item => item.room_id===listMessageSocket.room )
            const listChatConvert = roomSocket.concat(arrDelete);
            setListChat(listChatConvert)
        }
    }, [listMessageSocket]);

    return(
        <div className="list-chat">
            <div
                className="create-group"
                onClick={() => setIsVisibleModal(!isVisibleModal)}
            >   
                <div>
                    Tạo nhóm chat
                </div>
                <UsergroupAddOutlined className="create-group-icon"/>
            </div>
            {
                listChat.map(chatItem => {
                    const dataChat = {
                        id: chatItem.room_id,
                        name: chatItem.name,
                        avatar: chatItem.avatar,
                        room_type: chatItem.room_type
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

            <ModalCreateGroup
                isVisible={isVisibleModal}
                setIsVisibleModal={setIsVisibleModal}
                reloadListChat={() => setReload(!reload)}
            />
        </div>
    )
}

export default ListChat;