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
                    <MessagerItem
                        isSend={true}
                        message={item}
                    />
                ))
            }
            <div ref={scrollBottomRef}></div>
        </div>
    )
}

export default MessagerList;