import jwtDecode from "jwt-decode";

const checkLogin = () => {
    const token = localStorage.getItem('token');
    if(token){
        let decode = jwtDecode(token);
        if(decode.exp < Date.now() / 1000){
            localStorage.removeItem('token');
            return false;
        }
        return true;
    }
    return false;
}

export {checkLogin};