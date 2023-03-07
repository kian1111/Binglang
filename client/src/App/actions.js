import api from "../utils/api";

export const loadUser = () => async dispatch =>{

    try {
        const {data} = await api.get("/auth");

        dispatch({type: "USER_LOADED", payload : data})

        return data;

    } catch (error) {
        dispatch({type: "LOGOUT"})
    }
}
