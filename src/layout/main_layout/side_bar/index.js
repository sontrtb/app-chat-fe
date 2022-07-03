import { NavLink, useNavigate } from 'react-router-dom';
import { routerList } from '../../../router';
import {ImportOutlined} from '@ant-design/icons';
import { getProfile } from '../../../api/apiUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../redux/actions';
import avatarDefault from "../../../access/image/avatar_default.jpg";
import { setAvatar } from "../../../api/apiUser";
import { API_MEDIA_URL } from "../../../config/index";

function SideBar() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user).value;

    const formData = new FormData();

    useEffect(() => {
        getProfile((res, err) => {
            if(res){
                dispatch(addUser(res.user))
            }
            else console.log(err)
        })
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('./login');
        window.location.reload();
    }
    
    const openProfile = () => {
        navigate('/profile');
    }

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
        <div className="side-bar">
            <div className="avatar-wrap">
                <img
                    src={user?.avatar ? API_MEDIA_URL+user.avatar : avatarDefault}
                    alt="Avatar"
                    className="avatar-img"
                    onClick={openProfile}
                />
                <div className='name'>
                    {user?.first_name + " " + user?.last_name}
                </div>
                {
                    !user?.avatar &&
                    <div>
                        <label 
                            className="update-avatar"
                            htmlFor="input-avatar_slide-bar"
                        >
                            Cập nhật ảnh đại diện
                        </label>
                        <input
                            type="file"
                            className='none'
                            id="input-avatar_slide-bar"
                            onChange={handleChangeAvatar}
                        />
                    </div>
                }
            </div>

            <ul className="navbar-wrap">
                {
                    routerList.map(item => (
                        item.isNavbar &&
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={
                                    ({ isActive }) =>
                                    isActive ?
                                    "narbar-item active" :
                                    "narbar-item"
                                } 
                            >   
                                <div className="icon-navbar">
                                    {item.icon}
                                </div>
                                <div className="name-navbar">
                                    {item.name}
                                </div>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>

            <div
                className="logout-wrap"
                onClick={handleLogout}
            >   
                <div className="logout-icon">
                    <ImportOutlined />
                </div>
                <div className="logout-text">
                    Đăng xuất
                </div>
            </div>
        </div>
    )
}

export default SideBar;