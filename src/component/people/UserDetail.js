import { useNavigate } from 'react-router-dom';
import avatarDefault from "../../access/image/avatar_default.jpg";
import { API_MEDIA_URL } from "../../config/index";
import {MessageOutlined} from "@ant-design/icons";

function UserDetail({user}) {

    const navigate = useNavigate();

    const dataUser = {
        id: user.id,
        name: user.last_name + " " + user.first_name,
        avatar: user.avatar
    }
    const openWindowChat = () => {
        navigate('/', {state: dataUser});
    }

    return(
        <div
            className="user-detail"
            style={!user.last_name ? {display: "none"} : null}
        >
            <img
                src={user?.avatar ? API_MEDIA_URL+user.avatar : avatarDefault}
                alt="Avatar"
                className="avatar"
            />
            <h2>{user.last_name + " " + user.first_name}</h2>
            
            <div
                className='message'
                onClick={openWindowChat}
            >
                <MessageOutlined />
                <span> </span>
                Nhắn tin
            </div>
        </div>
    )
}

export default UserDetail;