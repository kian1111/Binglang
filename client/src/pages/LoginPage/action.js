import api from "../../utils/api";
import setAuthToken from "../../utils/setAuthToken";

export const authUser = ({username, password}) => async dispatch => {

    const {data} = await api.post("/auth", {username,password});

    setAuthToken(data.token);

    dispatch({type: "LOGIN_SUCCESS", payload : data});

    return data;
    
}
