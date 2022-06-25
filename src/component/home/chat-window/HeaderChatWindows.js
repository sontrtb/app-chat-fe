import { InfoCircleOutlined } from '@ant-design/icons';
import ModalChatInformation from '../modal/ModalChatInformation';
import { useState } from 'react';

function HeaderChatWindow() {

    const [isVisibleModalInfo, setIsVisibleModalInfo] = useState(false);

    const toggerModalChatInfor = () => {
        setIsVisibleModalInfo(!isVisibleModalInfo)
    }

    return(
        <div className="header-chat-window">
            <div className="right-content">
                <img
                    src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                    alt="anh dai dien"
                    className="avatar"
                />
                <h2>Pham Hong Son</h2>
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
            />

        </div>
    )
}

export default HeaderChatWindow;