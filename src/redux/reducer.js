const initState = {
    user: {}
}

const rootReducer = (state = initState, action) => {
    const value = action.payload
    switch(action.type) {
        case 'user/addUser': 
            return {
                ...state,
                user: {
                    ...state.user,
                    value
                }
            }
        
        default:
            return state;
    }
}

export default rootReducer;