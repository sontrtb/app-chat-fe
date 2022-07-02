import { _rootPath, rootApi } from "./rootApi";

const path = {
    user: {
        profile: _rootPath + "/get_profile",
        list_user: _rootPath + "/search_user",
    }
}

function getProfile(callback) {
    rootApi({
        withToken: true
    }).get(path.user.profile)
    .then(res => {
        return callback(res.data)
    })
    .catch(err => {
        return callback(null, err)
    })
}

const getListUser = (params, callback) => {
    rootApi({
        withToken: true
    }).get(path.user.list_user, {params: params})
        .then(res => {
            return callback(res.data);
        })
        .catch(err => {
            return callback(null, err);
        })
}

export {
   getProfile,
   getListUser
};
