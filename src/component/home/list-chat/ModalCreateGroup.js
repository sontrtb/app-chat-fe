import Modal from "../../global/modal/Modal"
import InputAuth from "../../auth/InputAuth";
import {useState} from "react";

function ModalCreateGroup(props) {
    const { isVisible, setIsVisibleModal } = props;

    const [nameGroup, setNameGroup] = useState("");
    const [avatar, setAvatar] = useState();

    const formData = new FormData();

    const handleChangeAvatar = (e) => {
        const avatar = e.target.files[0]
        setAvatar(avatar)
        formData.append("avatar", avatar)
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

                    <h3>Ảnh nhóm</h3>
                    <input
                        type="file"
                        onChange={handleChangeAvatar}
                    />

                    <p className="note-admin">Quyền quản trị viên cho các thành viên khác:</p>
                    <div className="radio-wrap">
                        <div>
                            <input
                                type="radio"
                                name="checkbox_create_group"
                                value="0"
                                id="checkbox_create_group1"
                            />
                            <label htmlFor="checkbox_create_group1">Không</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="checkbox_create_group"
                                value="1"
                                id="checkbox_create_group2"
                            />
                            <label htmlFor="checkbox_create_group2">Có</label>
                        </div>
                    </div>
                </div>
            </Modal>
    )
}

export default ModalCreateGroup;