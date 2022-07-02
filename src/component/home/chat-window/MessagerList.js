import MessagerItem from "./MessagerItem";
import { useRef, useEffect, useState } from 'react';
import InputMessager from "./InputMessager";

function MessagerList( {userChat} ) {

    const scrollBottomRef = useRef();

    const [listMessage, setListMessage] = useState([]);
    const [parentMess, setParentMess] = useState("");

    useEffect(() => {
        scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [listMessage])

    return (
        <div className="messager-list">
            {
                listMessage.map((item, index) => (
                    <div key={index}>
                        <MessagerItem
                            isSend={Math.floor(Math.random() * 2) === 1 ? true : false}
                            message={item}
                            setParentMess={setParentMess}
                        />
                    </div>
                ))
            }
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