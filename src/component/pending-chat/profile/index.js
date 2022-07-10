import avatarDefault from "../../../access/image/avatar_default.jpg";
import { API_MEDIA_URL } from "../../../config/index";
import {useState} from 'react';
import {SendOutlined} from '@ant-design/icons';
import { sendMessage } from "../../../api/apiMessage";
import { useNavigate } from 'react-router-dom';
import RenderContentMess from "../../home/chat-window/RenderContentMess";

function ProfileUserPending({userPendingChat}) {

    const navigate = useNavigate();


    const [messageSend, setMessageSend] = useState("");
    
    let formData = new FormData();

    const clearFormData = () => {
        formData.delete('text');
    }

    const handleSendMess = () => {
        if(messageSend.length === 0)
            return;

        formData.append('text', messageSend);
        formData.append('room_id', userPendingChat.room_id);

        sendMessage(formData, (res, err) => {
            if(res){
                setMessageSend("");
    
                const dataUser = {
                    id: userPendingChat.room_id,
                    name: userPendingChat.name,
                    avatar: userPendingChat?.avatar
                }
                navigate('/', {state: dataUser});
            }
            clearFormData();
        })
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter')
            handleSendMess();
    }

    return (
        <div>
            {
                userPendingChat.room_id
                ?
                <div className="profile-pending-chat">
                    <div className='avatar-wrap'>
                        <img
                            src={userPendingChat?.avatar ? API_MEDIA_URL+userPendingChat.avatar : avatarDefault}
                            alt="Avatar"
                            className="avatar-img"
                        />
                    </div>

                    <h2>
                        {userPendingChat?.name}
                    </h2>

                    <div className="message-wrap">
                        <div className="message">
                            {
                                userPendingChat && 
                                <RenderContentMess message={userPendingChat.last_message} />
                            }
                        </div>
                        <div className="send-mess">
                            <div className="note">
                                {`Bằng cách trả lời, bạn đã chấp nhận nhắn tin với ${userPendingChat?.name} :`}
                            </div>

                            <div className='input-wrap'>
                                <input
                                    placeholder="Nhập tin nhắn..."
                                    className='input'
                                    value={messageSend}
                                    onChange={e => setMessageSend(e.target.value)}
                                    onKeyDown={e => handleEnter(e)}
                                />
                                <div
                                    className='icon-send'
                                    onClick={handleSendMess}
                                >
                                    <SendOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default ProfileUserPending;