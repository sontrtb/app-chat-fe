import {
    CloseCircleOutlined,
    EditOutlined,
    CameraOutlined,
    UserAddOutlined,
} from '@ant-design/icons';
import avatarDefault from "../../../access/image/avatar_default.jpg";
import { API_MEDIA_URL } from "../../../config/index";
import { useState, useEffect } from "react";
import ModalAddMember from './ModalAddMember';
import { informationGroup } from "../../../api/apiGroup";

function ModalChatInformation( props ) {
    const { isVisible, toggerModal, userChat } = props;

    const [isVisibleModalAdd, setIsVisibleModalAdd] = useState(false);
    const [inforGroup, setInforGroup] = useState(userChat);
    const [reloadInforGroup, setReloadInforGroup] = useState(true);

    useEffect(() => {
        setInforGroup(userChat)
    
        if(isVisible && userChat.room_type==="group") {
            const params = {
                group_id: userChat.id,
            }
            informationGroup(params, (res, err) => {
                if(res) {
                    setInforGroup({...res.group, room_type: "group"});
                }
            })
        }
    }, [userChat, isVisible, reloadInforGroup])

    const toggerModalAddMember = () => {
        setIsVisibleModalAdd(!isVisibleModalAdd);
    }

    const updateAvatarGroup = () => {
        // errorNotification("dssds");
        // console.log("hell")
    }

    const updateNameGroup = () => {

    }

    return(
        <>
            <div
                className="modal-chat-information"
                style={{transform: isVisible ? "translateX(0)" : "translateX(100%)" }}
            >  
                <div className='header'>
                    <h2 className='title'>Thông tin đoạn chat</h2>
                    <div
                        onClick={toggerModal}
                        className="icon-close"
                    >
                        <CloseCircleOutlined />
                    </div>
                </div>

                <div className='content'>
                    <div className='avatar-wrap'>
                        <img
                            src={inforGroup?.avatar ? API_MEDIA_URL+inforGroup.avatar : avatarDefault}
                            alt="anh dai dien"
                            className="avatar"
                        />
                        {
                            inforGroup.room_type==="group" &&
                            <div
                            className='icon-avatar'
                            onClick={updateAvatarGroup}
                        >
                            <CameraOutlined />
                        </div>
                        }
                    </div>
                    
                    <h3>
                        {inforGroup?.name}
                        {
                            inforGroup.room_type==="group" &&
                            <span
                                className='icon-edit'
                                onClick={updateNameGroup}
                            >
                                <EditOutlined />
                            </span>
                        }
                    </h3>

                    <div className='line'></div>
                    
                    {
                        inforGroup.room_type==="group" &&
                        <div className='member-wrap'>
                        <div className='header-member-wrap'>
                            <h3>Thành viên:</h3>
                            <UserAddOutlined
                                className="add-member"
                                onClick={toggerModalAddMember}    
                            />
                        </div>

                        <div className='member-list'>
                            {
                                inforGroup?.members?.map(item => (
                                    <div className='member'>
                                        <img
                                            src={item?.avatar ? API_MEDIA_URL+item.avatar : avatarDefault}
                                            alt="anh dai dien"
                                            className="avatar"
                                        />
                                        <p className='name'>{item.first_name + " " + item.last_name}</p>
                                    </div>
                                ))
                            }
                            

                            {/* <div className='member'>
                                <img
                                    src="https://2.bp.blogspot.com/-kG0fAFQvLvI/WMOUyG3Lg_I/AAAAAAAAASs/gRsqWGzn1wIgU5_Mq-GaTGDgz8J8wdt8wCLcB/s1600/77602.jpg"
                                    alt="anh dai dien"
                                    className="avatar"
                                />
                                <p className='name'>pham hogn son</p>
                            </div> */}
                        </div>
                    </div>
                    }
                </div>

                 <ModalAddMember
                    isVisible={isVisibleModalAdd}
                    setIsVisible={setIsVisibleModalAdd}
                    idChat={inforGroup.id}
                    reloadInforGroup={() => setReloadInforGroup(!reloadInforGroup)}
                />
            </div>
            {
                isVisible &&
                <div
                    className='overlay_modal-chat-information'
                    onClick={toggerModal}
                />
            }
        </>
    )
}

export default ModalChatInformation;