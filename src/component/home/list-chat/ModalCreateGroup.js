import Modal from "../../global/modal/Modal"
import InputAuth from "../../auth/InputAuth";
import {useState, useEffect} from "react";
import {PictureOutlined} from "@ant-design/icons";
import ButtonAuth from "../../auth/ButtonAuth";
import {createGroup} from "../../../api/apiGroup";

function ModalCreateGroup(props) {
    const { isVisible, setIsVisibleModal, reloadListChat } = props;

    const [nameGroup, setNameGroup] = useState("");
    const [membersCanChangeInfo, setMembersCanChangeInfo] = useState(0);
    const [avatar, setAvatar] = useState();

    const formData = new FormData();

    const clearForm = () => {
        formData.delete('avatar');
        formData.delete('name');
        formData.delete('members_can_change_info');
        setNameGroup("");
        setMembersCanChangeInfo(0);
        setAvatar();
    }

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)

        if(file) {
            setAvatar(file);
        }
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handleCreateGroup = () => {
        formData.append("name", nameGroup);
        formData.append("members_can_change_info", membersCanChangeInfo);
        avatar && formData.append("avatar", avatar);

        createGroup(formData, (res, err) => {
            if(res) {
                reloadListChat();
                console.log(res.group);
                clearForm();
                setIsVisibleModal(false);
            }
        })

    }

    return (
        <Modal
            isVisible={isVisible}
            setIsVisible={setIsVisibleModal}
        >
            <div className="modal-create-group">
                <h2 className="title">Tạo nhóm Chat</h2>

                <h3>Tên nhóm:</h3>
                <InputAuth
                    value={nameGroup}
                    placeholder="Tên nhóm ..."
                    onChange={e => setNameGroup(e.target.value)}
                />

                <h3>Ảnh nhóm:</h3>
                {
                    avatar ?
                    <label htmlFor="input-avatar-group">
                        <img
                            src={avatar.preview}
                            alt="anh nhom"
                            className="avatar-preview"
                        />
                    </label>
                    :
                    <label htmlFor="input-avatar-group">
                        <PictureOutlined className='icon-avatar'/>
                    </label>
                }
                <input
                    type="file"
                    className="none"
                    id="input-avatar-group"
                    onChange={handleChangeAvatar}
                />

                <h3 className="note-admin">Quyền quản trị viên cho các thành viên khác:</h3>
                <div className="radio-wrap">
                    <div>
                        <input
                            type="radio"
                            name="checkbox_create_group"
                            value={0}
                            id="checkbox_create_group1"
                            onChange={e => setMembersCanChangeInfo(e.target.value)}
                        />
                        <label htmlFor="checkbox_create_group1">Không</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="checkbox_create_group"
                            value={1}
                            id="checkbox_create_group2"
                            onChange={e => setMembersCanChangeInfo(e.target.value)}
                        />
                        <label htmlFor="checkbox_create_group2">Có</label>
                    </div>
                </div>

                <ButtonAuth title="Tạo nhóm" onClick={handleCreateGroup}/>
            </div>
        </Modal>
    )
}

export default ModalCreateGroup;