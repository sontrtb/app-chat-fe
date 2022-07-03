import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
import avatarDefault from "../access/image/avatar_default.jpg";
import { setAvatar } from "../api/apiUser";
import { MailOutlined, PhoneOutlined, CameraOutlined } from "@ant-design/icons";
import { API_MEDIA_URL } from "../config/index";

function Profile() {

    const user = useSelector((state) => state.user).value;
    const dispatch = useDispatch();

    const formData = new FormData();

    const handleChangeAvatar = (e) => {
        const avatar = e.target.files[0]
        formData.append("avatar", avatar)

        setAvatar(formData, (res, err) => {
            if(res) {
                dispatch(addUser(res.user))
            }

            formData.delete("avatar")
        })
        
    }

    return (
        <div className="profile">
            <div className='avatar-wrap'>
                <img
                    src={user?.avatar ? API_MEDIA_URL+user.avatar : avatarDefault}
                    alt="Avatar"
                    className="avatar-img"
                />

                <label htmlFor="input-avatar_profile">
                    <div className='icon-avatar'>
                        <CameraOutlined />
                    </div>
                    <input
                        type="file"
                        className='none'
                        id="input-avatar_profile"
                        onChange={handleChangeAvatar}
                    />
                </label>
            </div>

            <h2>
                {user?.last_name + " " + user?.first_name}
            </h2>

            <div className='information'>
                <div className='infor-item'>
                    <MailOutlined className='icon'/>
                    {user?.email}
                </div>
                <div className='infor-item'>
                    <PhoneOutlined className='icon'/>
                    {user?.phone || "Cập nhật"}
                </div>
            </div>
        </div>
    )
}

export default Profile;