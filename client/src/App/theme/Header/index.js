import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import setAuthToken from "../../../utils/setAuthToken";
import { StyledHeader } from "./style"


export const Header = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    /*
    dispatch(send => {
        send({type : "LOGIN SUCCESS", payload : {username,password}})
    })
    */
    const handleSubmit = async event => {
      event.preventDefault();
    
      try{
            dispatch({type : "LOGOUT"});
            setAuthToken(null);
      }
      catch(err){
        console.log(err);
        alert(err.message);
      }
    };
    return (
        <StyledHeader>
            <span> Binglang App 🌐</span>
            <form onSubmit={handleSubmit}>
                {auth.is_authenticated && <button className="logout-button" type="submit"> 
                Log out 
                </button>}
            </form>
            
        </StyledHeader>
    )
}