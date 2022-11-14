import { _rootPath, rootApi } from "./rootApi";

const path = {
    group: {
        create: _rootPath + "/create_group",
        addMember: _rootPath + "/add_user_to_group",
        updateGroup: _rootPath + "/group_settings",
        groupInfo: _rootPath + "/group_info",
        deleteMember: _rootPath + "/remove_user_from_group",
    }
}

function createGroup(data, callback) {
    rootApi().post(path.group.create, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

function addMember(data, callback) {
    rootApi().post(path.group.addMember, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

function updateGroup(data, callback) {
    rootApi().post(path.group.updateGroup, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

function informationGroup(params, callback) {
    rootApi().get(path.group.groupInfo, {params: params})
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    })
}

function deleteMember(data, callback) {
    rootApi().post(path.group.deleteMember, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

export {
    createGroup,
    addMember,
    updateGroup,
    informationGroup,
    deleteMember
};
