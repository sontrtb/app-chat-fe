import { useState } from "react";
import ReactMessage from "./ReactMessage";
import ListReacted from "./ListReacted";
import ReplyMessage from "./ReplyMessage";

function MessagerItem(props) {
    const { isSend, message, setParentMess } = props;

    const [listReact, setListReact] = useState([]);

    const handleReactMessage = (id) => {
        console.log(id);
        setListReact(pre => [...pre, id])
    }

    return (
        <div className="messager-item">
            {
                isSend
                    ?
                <div className="mess-send-wrap">
                    <div className="action-message">
                        <div onClick={() => setParentMess(message)}>
                            <ReplyMessage />
                        </div>
                        <ReactMessage
                            message={message}
                            isSend={isSend}
                            handleReactMessage={handleReactMessage}
                        />
                    </div>

                    <p className="mess-send">{message}</p>

                    <ListReacted
                        listReact={listReact}
                        isSend={isSend}
                    />
                </div>
                    :
                <div className="mess-recive-wrap">
                    <img
                        src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                        alt="anh dai dien"
                        className="avatar"
                    />
                    <div>
                        <p className="name-receive">Pham HOng Son</p>
                        <div className="mess-receive-wrap">
                            <p className="mess-receive">{message}</p>

                            <div className="action-message">
                                <ReactMessage
                                    message={message}
                                    handleReactMessage={handleReactMessage}
                                />
                                <div onClick={() => setParentMess(message)}>
                                    <ReplyMessage />
                                </div>
                            </div>

                            <ListReacted
                                listReact={listReact}
                                isSend={isSend}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default MessagerItem;