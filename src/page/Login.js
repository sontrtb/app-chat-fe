import { useNavigate } from 'react-router-dom';
import InputAuth from '../component/auth/InputAuth';
import ButtonAuth from '../component/auth/ButtonAuth';
import LoginSoial from '../component/auth/LoginSocial';
import {
    UserOutlined
} from '@ant-design/icons';

function Login() {

    const navigate = useNavigate();

    const openRegister = () => {
        navigate('/register')
    }

    const handleLogin = () => {
        navigate('/')
    }

    return (
        <div className='auth'>
            <h1 className='title-page'>Đăng nhập</h1>

            <InputAuth
                icon={<UserOutlined />}
                placeholder="Tên đăng nhập..."
            />

            <InputAuth
                icon={<UserOutlined />}
                placeholder="Tên đăng nhập..."
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