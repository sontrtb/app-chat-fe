import MessagerItem from "./MessagerItem";
import { useRef, useEffect } from 'react';

function MessagerList( props ) {
    const { listMessage } = props;

    const scrollBottomRef = useRef();

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
                        />
                    </div>
                ))
            }
            <div ref={scrollBottomRef}></div>
        </div>
    )
}

export default MessagerList;