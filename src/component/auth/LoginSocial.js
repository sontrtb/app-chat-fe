import { auth, googleProvider } from "../../firebase/config";
import google from "../../access/icon/google.png";
import { signInWithPopup } from "firebase/auth";

function LoginSoial() {

    const handleLogin = () => {
        
    }
    
    const handleLoginGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="login-social">
            <h3>Hoặc bắt đầu bằng: </h3>
            <div className="social-wrap">
                <img
                    src={google}
                    alt="Goolge"
                    className="icon-social"
                    onClick={handleLoginGoogle}
                />
            </div>
        </div>
    )
}

export default LoginSoial;