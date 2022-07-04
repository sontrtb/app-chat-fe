import { _rootPath, rootApi } from "./rootApi";

const path = {
    message: {
        send: _rootPath + "/add_new_message",
        list_chat: _rootPath + "/get_recent_messages",
        list_mess: _rootPath + "/get_messages",
        react_mess: _rootPath + "/react_to_message",
        list_pending_chat: _rootPath + "/get_pending_messages",
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

function getListMessage(params, callback) {
    rootApi({
        withToken: true
    }).get(path.message.list_mess, {params: params})
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    })
}

function getPendingChat(callback) {
    rootApi({
        withToken: true
    }).get(path.message.list_pending_chat)
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

function reactMessage(data, callback) {
    rootApi({
        withToken: true
    }).post(path.message.react_mess, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

export {
    sendMessage,
    getListChat,
    getListMessage,
    reactMessage,
    getPendingChat,
};
