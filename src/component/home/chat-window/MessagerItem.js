import { useState } from "react";
import ReactMessage from "./ReactMessage";
import ListReacted from "./ListReacted";
import ReplyMessage from "./ReplyMessage";
import {
    getFullNameSend,
    getAvatarUserSend
} from "../../../ultis/getInformationMess";
import { reactMessage } from "../../../api/apiMessage";

function MessagerItem(props) {
    const { isSend, message, setParentMess } = props;

    const messId = message.id;

    const {reaction} = message;
    const reactionInit = reaction?.map(item => item.reaction)

    const [listReact, setListReact] = useState(reactionInit);

    const handleReactMessage = (name) => {
        const data = {
            "message_id": messId,
            "reaction": name
        }
        reactMessage(data, (res, err) => {
            if(res) {
                console.log(res);
                setListReact(pre => [...pre, name])
            }
        })

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
                            message={message.text}
                            isSend={isSend}
                            handleReactMessage={handleReactMessage}
                        />
                    </div>

                    <p className="mess-send">{message.text}</p>

                    <ListReacted
                        listReact={listReact}
                        isSend={isSend}
                    />
                </div>
                    :
                <div className="mess-recive-wrap">
                    <img
                        src={getAvatarUserSend(message)}
                        alt="anh dai dien"
                        className="avatar"
                    />
                    <div>
                        <p className="name-receive">
                            {getFullNameSend(message)}
                        </p>
                        <div className="mess-receive-wrap">
                            <p className="mess-receive">{message.text}</p>

                            <div className="action-message">
                                <ReactMessage
                                    message={message.text}
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