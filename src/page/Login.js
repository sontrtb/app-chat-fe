import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const openRegister = () => {
        navigate('/register')
    }

    const handleLogin = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Đăng nhập</h1>
            <button
                onClick={openRegister}
            >chưa có tài khoản, đăng ký</button>
            <br />
            <button
                onClick={handleLogin}
            >đăng nhập</button>
        </div>
    )
}

export default Login;