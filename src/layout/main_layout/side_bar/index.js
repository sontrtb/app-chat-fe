import { NavLink, useNavigate } from 'react-router-dom';
import { routerList } from '../../../router';
import {ImportOutlined} from '@ant-design/icons';
import { getProfile } from '../../../api/apiUser';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/actions';
import avatarDefault from "../../../access/image/avatar_default.jpg";

function SideBar() {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [user, setUser] = useState({});

    useEffect(() => {
        getProfile((res, err) => {
            if(res){
                setUser(res.user)
                dispatch(addUser(res.user))
            }
            else console.log(err)
        })
    }, [dispatch])

    const handleLogout = () => {
        navigate('./login');
    }
    
    const openProfile = () => {
        navigate('/profile');
    }

    return (
        <div className="side-bar">
            <div className="avatar-wrap">
                <img
                    src={user?.avatar || avatarDefault}
                    alt="Avatar"
                    className="avatar-img"
                    onClick={openProfile}
                />
                <div className='name'>
                    {user?.last_name + " " + user?.first_name}
                </div>
                {
                    !user?.avatar &&
                    <div className="update-avatar">
                        Cập nhật ảnh đại diện
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