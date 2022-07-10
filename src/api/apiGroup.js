import { _rootPath, rootApi } from "./rootApi";

const path = {
    group: {
        create: _rootPath + "/create_group",
        addMember: _rootPath + "/add_user_to_group",
        updateGroup: _rootPath + "/group_settings",
        groupInfo: _rootPath + "/group_info",
    }
}

function createGroup(data, callback) {
    rootApi({
        withToken: true
    }).post(path.group.create, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

function addMember(data, callback) {
    rootApi({
        withToken: true
    }).post(path.group.addMember, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

function updateGroup(data, callback) {
    rootApi({
        withToken: true
    }).post(path.group.updateGroup, data)
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    });
}

function informationGroup(params, callback) {
    rootApi({
        withToken: true
    }).get(path.group.groupInfo, {params: params})
    .then(res => {
        return callback(res.data);
    })
    .catch(err => {
        return callback(null, err);
    })
}


export {
    createGroup,
    addMember,
    updateGroup,
    informationGroup,
};
