import MessagerItem from "./MessagerItem";
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InputMessager from "./InputMessager";
import { getListMessage } from "../../../api/apiMessage";
import {LoadingOutlined} from "@ant-design/icons";

function MessagerList({ userChat, messageSocket }) {

    const user = useSelector((state) => state.user).value;
    const userId = user?.id;
   
    const scrollBottomRef = useRef();
    const scrollMessList = useRef();

    const [listMessage, setListMessage] = useState([]);
    const [parentMess, setParentMess] = useState({});
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!userChat?.id)
            return;
        setPage(0);

        setLoading(true);
        const params = {
            "room_id": userChat?.id,
            "page": 0,
        }
        getListMessage(params, (res, err) => {
            if(res){
                setListMessage(res.messages)
                scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            else setListMessage(listMessage);
            setLoading(false);
        })
    }, [userChat])

    useEffect(() => {
        if(messageSocket.id && userId !== messageSocket.sender.id) {
            setListMessage(pre => [...pre, messageSocket])
        }
        scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messageSocket])

    useEffect(() => {
        setLoading(true);
        const params = {
            "room_id": userChat?.id,
            "page": page,
        }
        getListMessage(params, (res, err) => {
            if(res){
                const arrListMess = res.messages.concat(listMessage)
                setListMessage(arrListMess)
            }
            else setListMessage(listMessage);
            setLoading(false);
        })
    }, [page])

    const handleScroll = () => {
        const {scrollTop} = scrollMessList.current;
        if(scrollTop===0 && !loading) {
            setPage(page+1)
        }
    }

    return (
        <div
            ref={scrollMessList}
            className="messager-list"
            onScroll={handleScroll}
        >
            {
                loading && 
                <div className="loading">
                    <LoadingOutlined />
                </div>
            }
            {
                listMessage.map((item, index) => {
                    return (
                        <div key={index}>
                            <MessagerItem
                                isSend={userId === item.sender?.id}
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