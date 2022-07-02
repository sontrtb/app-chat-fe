import { _rootPath, rootApi } from "./rootApi";

const path = {
    auth: {
        login: _rootPath + "/login",
        register: _rootPath + "/register",
    }
}

function LoginAPI(data, callback) {
    rootApi({
        withToken: false
    }).post(path.auth.login, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

function RegisterAPI(data, callback) {
    rootApi({
        withToken: false
    }).post(path.auth.register, data)
    .then(res => {
        return callback(res.data)
    })
    .catch(err => {
        return callback(null, err)
    })
}

export {
    LoginAPI,
    RegisterAPI
};
