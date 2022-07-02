import { _rootPath, rootApi } from "./rootApi";

const path = {
    message: {
        send: _rootPath + "/add_new_message",
        list_chat: _rootPath + "/get_recent_messages",
    }
}

function getListChat(callback) {
    rootApi({
        withToken: true
    }).get(path.message.list_chat)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    })
}

function sendMessage(data, callback) {
    rootApi({
        withToken: true
    }).post(path.message.send, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

export {
    sendMessage,
    getListChat
};
