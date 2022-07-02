export const addUser = (data) => {
    return {
        type: 'user/addUser',
        payload: data,
    }
}