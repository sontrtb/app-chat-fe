import Home from '../page/Home';
import User from '../page/User';
import Register from '../page/Register';
import Login from '../page/Login';


import {
    MessageOutlined,
    TeamOutlined
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
        name: "Bạn bè",
        icon: <TeamOutlined />,
        component: User,
        isLogin: true,
        isNavbar: true,
    },
    {
        path: "/user",
        name: "Người dùng",
        component: User,
        isLogin: true,
        isNavbar: false,
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
    }
];

export {
    routerList,
}