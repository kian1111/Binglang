const initialState = {
    username : null,
    account_type: null,
    is_authenticated: false,
    _id:null,
    loaded: false
}

 const authReducer = (state = initialState, {type, payload}) => {
    switch(type)
    {
        case "USER_LOADED": //{token, accountType}
        case "LOGIN_SUCCESS": 
        case "REGISTER_SUCCESS":
            return {
                ...state, 
                account_type: payload.account_type || null, 
                _id: payload._id || null,
                username : payload.username || null,
                is_authenticated: true,
                loaded: true
            }
        case "LOGOUT":
            return {...state, username : null, loaded: true, account_type: null, is_authenticated: false, _id: null}
        default:
            return state
    }
}

export default authReducer