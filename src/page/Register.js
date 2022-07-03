import { useNavigate } from 'react-router-dom';
import InputAuth from '../component/auth/InputAuth';
import ButtonAuth from '../component/auth/ButtonAuth';
import LoginSoial from '../component/auth/LoginSocial';
import {
    UserOutlined,
    LockOutlined,
    MailOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import {RegisterAPI} from '../api/apiAuth';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const valueRegisterInit = {
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    }
    const [valueRegister, setValueRegister] = useState(valueRegisterInit);
    // const [passwordAgain, setPasswordAgain] = useState("");
    const [pressBtnRegister, setPressBtn] = useState(false);

    const listInputForm = [
        {
            name: "username",
            icon: <UserOutlined />,
            placeholder: "Tên đăng nhập...",
            value: valueRegister.username
        },
        {
            name: "email",
            icon: <MailOutlined />,
            placeholder: "Email...",
            value: valueRegister.email
        },
        {
            name: "last_name",
            icon: <UserOutlined />,
            placeholder: "Tên...",
            value: valueRegister.last_name
        },
        {
            name: "first_name",
            icon: <UserOutlined />,
            placeholder: "Họ, Tên đệm ...",
            value: valueRegister.first_name
        },
        {
            name: "password",
            icon: <LockOutlined />,
            placeholder: "Mật khẩu...",
            value: valueRegister.password
        },
    ]

    const validateValueRegister = (value) => {
        if(value?.length !==0)
            return false;
        return true;    
    }

    const validateFormRegister = () => {
        const arrValue = Object.values(valueRegister)
        for(let i=0; i<arrValue.length; i++) {
            if(!arrValue[i] || arrValue[i].length===0)
                return false;
        }
        return true;
    }

    const openLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        setPressBtn(true);
        if(validateFormRegister()) {
            RegisterAPI(valueRegister, (res, err) => {
                if(res) {
                    localStorage.setItem("token", res.token)
                    dispatch(addUser(res.user))
                    setValueRegister(valueRegisterInit)
                    navigate('/')
                    // setPasswordAgain("")
                }
            })
        }
    }

    return (
        <div className='auth'>
            <h1 className='title-page'>Đăng kí</h1>

            {
                listInputForm.map(({icon, name, placeholder, value}) => (
                    <div key={name}>
                        <InputAuth
                            icon={icon}
                            placeholder={placeholder}
                            value={value}
                            errValidate={validateValueRegister(value) && pressBtnRegister}
                            onChange={e => setValueRegister({...valueRegister, [name]: e.target.value})}
                        />
                    </div>
                ))
            }

            {/* <InputAuth
                icon={<LockOutlined />}
                placeholder="Nhập lại mật khẩu..."
                value={passwordAgain}
                onChange={e => setPasswordAgain(e.target.value)}
            /> */}

            <ButtonAuth
                title="Đăng kí"
                onClick={handleRegister}
            />

            <div
                onClick={openLogin}
                className="ask-account"
            >
                Đã có tài khoản?
                <span className='link'> Đăng nhập</span>
            </div>

            {/* <LoginSoial /> */}
        </div>
    )
}

export default Register;