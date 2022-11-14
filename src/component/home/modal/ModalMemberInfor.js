import Modal from "../../global/modal/Modal";
import avatarDefault from "../../../access/image/avatar_default.jpg";
import { API_MEDIA_URL } from "../../../config/index";
import {
    DeleteOutlined,
    MessageOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { deleteMember } from "../../../api/apiGroup";

function ModalMemberInfor( props ) {
    const {
        isVisible,
        setIsVisible,
        userChat,
        toggerModalChatInfo,
        idGroup,
        reloadInforGroup,
    } = props;

    const navigate = useNavigate();

    const dataUser = {
        id: userChat.id,
        name: userChat.last_name + " " + userChat.first_name,
        avatar: userChat.avatar
    }
    const handleSendMess = () => {
        navigate('/', {state: dataUser});
        setIsVisible(false);
        toggerModalChatInfo();
    }

    const handelDeleteMember = () => {
        const dataMemberDelete = {
            user_id : userChat.id,
            group_id: idGroup
        }
        deleteMember(dataMemberDelete, (res, err) => {
            if(res) {
                setIsVisible(false);
                reloadInforGroup();
            }
        })
    }

    return (
        <Modal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
        >
            <div className="modal-member-infor">
                <img
                    src={userChat?.avatar ? API_MEDIA_URL+userChat.avatar : avatarDefault}
                    alt="Avatar"
                    className="avatar"
                />
                <h2>
                    {userChat?.first_name + " " + userChat?.last_name}
                </h2>

                <div className="action-wrap">
                    <div
                        className="action"
                        onClick={handelDeleteMember}
                    >
                        <DeleteOutlined className="icon-delete"/>
                        Xóa khỏi cuộc trò chuyện
                    </div>
                    <div
                        className="action"
                        onClick={handleSendMess}
                    >
                        <MessageOutlined className="icon-message"/>
                        Nhắn tin
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default ModalMemberInfor;