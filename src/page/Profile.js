import { useSelector } from 'react-redux';
import avatarDefault from "../access/image/avatar_default.jpg";
import { MailOutlined, PhoneOutlined, CameraOutlined } from "@ant-design/icons";

function Profile() {

    const user = useSelector((state) => state.user).value;

    return (
        <div className="profile">
            <div className='avatar-wrap'>
                <img
                    src={user?.avatar || avatarDefault}
                    alt="Avatar"
                    className="avatar-img"
                />
                <div className='icon-avatar'>
                    <CameraOutlined />
                </div>
            </div>

            <h2>
                {user.last_name + " " + user.first_name}
            </h2>

            <div className='information'>
                <div className='infor-item'>
                    <MailOutlined className='icon'/>
                    {user.email}
                </div>
                <div className='infor-item'>
                    <PhoneOutlined className='icon'/>
                    {user.phone || "Cập nhật"}
                </div>
            </div>
        </div>
    )
}

export default Profile;