import avatarDefault from "../access/image/avatar_default.jpg";
import {API_MEDIA_URL} from "../config/index";

function getFullNameSend (data) {
    return data.sender.first_name + " " + data.sender.last_name;
}

function getAvatarUserSend (data) {
    if(data.sender.avatar)
        return API_MEDIA_URL + data.sender.avatar;
    return avatarDefault
}

function getIdUserSend( data ) {
    return data.sender.id;
}

export {
    getFullNameSend,
    getAvatarUserSend,
    getIdUserSend
}