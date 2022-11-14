import { useState } from "react";
import ReactMessage from "./ReactMessage";
import ListReacted from "./ListReacted";
import ReplyMessage from "./ReplyMessage";
import {
    getFullNameSend,
    getAvatarUserSend
} from "../../../ultis/getInformationMess";
import { reactMessage } from "../../../api/apiMessage";
import checkTypeFile from "../../../ultis/checkTypeFile";
import RenderContentMess from "./RenderContentMess";

function MessagerItem(props) {
    const { isSend, message, setParentMess } = props;

    const {reaction, reply_to} = message;
    const reactionInit = reaction?.map(item => item.reaction)

    const [listReact, setListReact] = useState(reactionInit);

    const handleReactMessage = (name) => {
        const data = {
            "message_id": message.id,
            "reaction": name
        }
        reactMessage(data, (res, err) => {
            if(res) {
                console.log(res);
                setListReact(pre => [...pre, name])
            }
        })
    }

    const renderParentMess = (reply_to) => {
        if(!reply_to)
            return;

        if(reply_to.text)
            return (
                <p className="parent-mess">{reply_to.text}</p>
            )
        
        return (
            <p className="parent-mess">{checkTypeFile(reply_to?.files[0])}</p>
        )
    }

    return (
        <div className="messager-item">
            {
                isSend
                    ?
                <div className="mess-send-wrap">
                    {renderParentMess(reply_to)}
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

                    <div className="mess-send">
                        <RenderContentMess message={message} />
                    </div>

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

                            {renderParentMess(reply_to)}

                            <div className="mess-receive">
                                <RenderContentMess message={message} />
                            </div>

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