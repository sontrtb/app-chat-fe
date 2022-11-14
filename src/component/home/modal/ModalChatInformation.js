import {
    CloseCircleOutlined,
    EditOutlined,
    CameraOutlined,
    UserAddOutlined,
    CheckOutlined,
} from '@ant-design/icons';
import avatarDefault from "../../../access/image/avatar_default.jpg";
import { API_MEDIA_URL } from "../../../config/index";
import { useState, useEffect } from "react";
import ModalAddMember from './ModalAddMember';
import ModalMemberInfor from './ModalMemberInfor';
import { informationGroup, updateGroup } from "../../../api/apiGroup";

function ModalChatInformation( props ) {
    const { isVisible, toggerModal, userChat } = props;

    const [isVisibleModalAdd, setIsVisibleModalAdd] = useState(false);
    const [isVisibleModalMember, setIsVisibleModalMember] = useState(false);
    const [inforGroup, setInforGroup] = useState(userChat);
    const [reloadInforGroup, setReloadInforGroup] = useState(true);
    const [showInputName, setShowInputName] = useState(false);
    const [nameUpdate, setNameUpdate] = useState(inforGroup?.name);
    const [memberSelect, setMemberSelect] = useState({});

    const formData = new FormData();

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

    const updateAvatarGroup = (e) => {
        const avatar = e.target.files[0]
        if(avatar) {
            formData.append("group_id", inforGroup.id);
            formData.append("avatar", avatar)
            updateGroup(formData, (res, err) => {
                if(res) {
                    console.log(res)
                }

                formData.delete("group_id");
                formData.delete("avatar")
            })
        }
    }

    const updateNameGroup = () => {
        formData.append("group_id", inforGroup.id);
        formData.append("name", nameUpdate)
        updateGroup(formData, (res, err) => {
            if(res) {
                console.log(res)
            }

            formData.delete("group_id");
            formData.delete("name")
            setShowInputName(false);
        })
    }

    const handleSelectMember = (item) => {
        setIsVisibleModalMember(true);
        setMemberSelect(item);
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
                            <label
                                className='icon-avatar'
                                htmlFor="input-avatar_modal-chat-infor"
                            >
                                <CameraOutlined />
                            </label>
                        }
                        <input
                            type="file"
                            id="input-avatar_modal-chat-infor"
                            className='none'
                            onChange={updateAvatarGroup}
                        />
                    </div>
                    
                    {
                        !showInputName ?
                        <h3>
                            {inforGroup?.name}
                            {
                                inforGroup.room_type==="group" &&
                                <span
                                    className='icon-edit'
                                    onClick={() => setShowInputName(true)}
                                >
                                    <EditOutlined/>
                                </span>
                            }
                        </h3> :
                        <div>
                            <input
                                className='input-name'
                                value={nameUpdate}
                                onChange={e => setNameUpdate(e.target.value)}
                            />
                            <span
                                className='icon-edit'
                                onClick={updateNameGroup}
                            >
                                <CheckOutlined/>
                            </span>
                        </div>
                    }

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
                                        <div
                                            className='member'
                                            onClick={() => handleSelectMember(item)}
                                        >
                                            <img
                                                src={item?.avatar ? API_MEDIA_URL+item.avatar : avatarDefault}
                                                alt="anh dai dien"
                                                className="avatar"
                                            />
                                            <p className='name'>{item.first_name + " " + item.last_name}</p>
                                        </div>
                                    ))
                                }
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

                <ModalMemberInfor
                    isVisible={isVisibleModalMember}
                    setIsVisible={setIsVisibleModalMember}
                    userChat={memberSelect}
                    toggerModalChatInfo={toggerModal}
                    idGroup={userChat.id}
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