import Home from '../page/Home';
import Profile from '../page/Profile';
import Register from '../page/Register';
import Login from '../page/Login';
import People from '../page/People';
import PendingChat from '../page/PendingChat';

import {
    MessageOutlined,
    TeamOutlined,
    UserOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';

const routerList = [
    {
        path: "/",
        name: "Trang chủ",
        component: Home,
        icon: <MessageOutlined />,
        isLogin: true,
        isNavbar: true,
    },
    {
        path: "/list_friends",
        name: "Mọi người",
        icon: <TeamOutlined />,
        component: People,
        isLogin: true,
        isNavbar: true,
    },
    {
        path: "/pending_chat",
        name: "Tin nhắn chờ",
        icon: <ExclamationCircleOutlined />,
        component: PendingChat,
        isLogin: true,
        isNavbar: true,
    },
    {
        path: "/profile",
        name: "Trang cá nhân",
        icon: <UserOutlined />,
        component: Profile,
        isLogin: true,
        isNavbar: true,
    },
    {
        path: "/login",
        name: "Đăng nhập",
        component: Login,
        isLogin: false,
        isNavbar: false,
    },
    {
        path: "/register",
        name: "Đăng ký",
        component: Register,
        isLogin: false,
        isNavbar: false,
    },
    {
        path: "*",
        name: "Trang chủ",
        component: Home,
        icon: <MessageOutlined />,
        isLogin: true,
        isNavbar: false,
    },
];

export {
    routerList,
}