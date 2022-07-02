import { useNavigate } from 'react-router-dom';
import InputAuth from '../component/auth/InputAuth';
import ButtonAuth from '../component/auth/ButtonAuth';
import LoginSoial from '../component/auth/LoginSocial';
import {
    UserOutlined,
    LockOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import { LoginAPI } from '../api/apiAuth';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const valueLoginInit = {
        username: "",
        password: ""
    }
    const [valueLogin, setValueLogin] = useState(valueLoginInit)

    const openRegister = () => {
        navigate('/register')
    }

    const handleLogin = () => {
        LoginAPI(valueLogin, (res, err) => {
            if(res){
                navigate('/')
                localStorage.setItem("token", res.token)
                dispatch(addUser(res.user))
                setValueLogin(valueLoginInit)
            }
        })
        
    }

    return (
        <div className='auth'>
            <h1 className='title-page'>Đăng nhập</h1>

            <InputAuth
                icon={<UserOutlined />}
                placeholder="Tên đăng nhập hoặc Email"
                value={valueLogin.username}
                onChange={e => setValueLogin({...valueLogin, username: e.target.value})}
            />

            <InputAuth
                icon={<LockOutlined />}
                placeholder="Mật khẩu..."
                value={valueLogin.password}
                onChange={e => setValueLogin({...valueLogin, password: e.target.value})}
            />

            <ButtonAuth
                title="Đăng nhập"
                onClick={handleLogin}
            />

            <div
                onClick={openRegister}
                className="ask-account"
            >
                Chưa có tài khoản?
                <span className='link'> Đăng ký</span>
            </div>

            <LoginSoial />
        </div>
    )
}

export default Login;