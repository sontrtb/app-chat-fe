import MessagerItem from "./MessagerItem";
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InputMessager from "./InputMessager";
import { getListMessage } from "../../../api/apiMessage";

function MessagerList( {userChat} ) {

    const user = useSelector((state) => state.user).value;
    const userId = user?.id;

    const scrollBottomRef = useRef();

    const [listMessage, setListMessage] = useState([]);
    const [parentMess, setParentMess] = useState({});

    useEffect(() => {
        if(!userChat?.id)
            return;

        const params = {"room_id": userChat?.id}
        getListMessage(params, (res, err) => {
            if(res)
                setListMessage(res.messages)
        })
    }, [userChat])

    useEffect(() => {
        scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [listMessage])

    return (
        <div className="messager-list">
            {
                listMessage.map((item, index) => {
                    return (
                        <div key={index}>
                            <MessagerItem
                                isSend={userId === item.sender.id}
                                message={item}
                                setParentMess={setParentMess}
                            />
                        </div>
                    )
                }
            )}
            <div ref={scrollBottomRef}></div>

            <InputMessager
                setListMessage={setListMessage}
                parentMess={parentMess}
                setParentMess={setParentMess}
                roomId={userChat?.id}
            />
        </div>
    )
}

export default MessagerList;