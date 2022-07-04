import { useState } from "react";
import ReactMessage from "./ReactMessage";
import ListReacted from "./ListReacted";
import ReplyMessage from "./ReplyMessage";
import {
    getFullNameSend,
    getAvatarUserSend
} from "../../../ultis/getInformationMess";
import { reactMessage } from "../../../api/apiMessage";
import { API_MEDIA_URL } from "../../../config/index";

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

    const renderContentMess = (message) => {
        return (
            <div>
                {
                    message.image &&
                    <img
                        src={API_MEDIA_URL + message.image}
                        alt="anh gui/nhan"
                        className="image-mess"
                    />
                }
                {
                    message.video &&
                    <video width="420" height="300" controls>
                        <source
                            src={API_MEDIA_URL + message.video}
                            type="video/mp4"
                        />
                        <source
                            src={API_MEDIA_URL + message.video}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                }
                <p>{message.text}</p>
            </div>
        )
    }

    const renderParentMess = (reply_to) => {
        if(!reply_to)
            return;

        if(reply_to.type  === "text")
            return (
                <p className="parent-mess">{reply_to.text}</p>
            )
        
        return (
            <p className="parent-mess">{reply_to.type}</p>
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
                        {renderContentMess(message)}
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
                                {renderContentMess(message)}
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