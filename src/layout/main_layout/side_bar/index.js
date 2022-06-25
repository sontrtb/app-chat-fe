import { NavLink, useNavigate } from 'react-router-dom';
import { routerList } from '../../../router';
import {ImportOutlined} from '@ant-design/icons';

function SideBar() {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('./login');
    }

    return (
        <div className="side-bar">
            <div className="avatar-wrap">
                <img
                    src="https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg"
                    alt="Avatar"
                    className="avatar-img"
                />
                <div className="update-avatar">
                    Cập nhật ảnh đại diện
                </div>
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