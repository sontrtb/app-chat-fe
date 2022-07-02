import { useNavigate } from 'react-router-dom';
import avatarDefault from "../../access/image/avatar_default.jpg";

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
                src={user.avatar || avatarDefault}
                alt="Avatar"
                className="avatar"
            />
            <h2>{user.last_name + " " + user.first_name}</h2>
            
            <button onClick={openWindowChat}>Nhắn tin</button>
        </div>
    )
}

export default UserDetail;