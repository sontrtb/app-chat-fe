import { InfoCircleOutlined } from '@ant-design/icons';
import ModalChatInformation from '../modal/ModalChatInformation';
import { useState } from 'react';
import avatarDefault from "../../../access/image/avatar_default.jpg";
import { API_MEDIA_URL } from "../../../config/index";

function HeaderChatWindow({userChat}) {

    const [isVisibleModalInfo, setIsVisibleModalInfo] = useState(false);

    const toggerModalChatInfor = () => {
        setIsVisibleModalInfo(!isVisibleModalInfo)
    }

    return(
        <div className="header-chat-window">
            <div className="right-content">
                <img
                    src={userChat?.avatar ? API_MEDIA_URL+userChat?.avatar : avatarDefault}
                    alt="anh dai dien"
                    className="avatar"
                />
                <h2>{userChat?.name}</h2>
            </div>

            <div className="left-content">
                <div
                    className="chat-information"
                    onClick={toggerModalChatInfor}
                >
                    <InfoCircleOutlined/>
                </div>
               
            </div>

            <ModalChatInformation
                isVisible={isVisibleModalInfo}
                toggerModal={toggerModalChatInfor}
                userChat={userChat}
            />

        </div>
    )
}

export default HeaderChatWindow;