import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate();

    const openLogin = () => {
        navigate('/login')
    }

    return (
        <div>
            <h1>Đăng ký</h1>

            <button
                onClick={openLogin}
            >đã có tài khoản, đăng nhập</button>
        </div>
    )
}

export default Register;