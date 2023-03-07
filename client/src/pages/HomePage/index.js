import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Loader } from "../../components/gui/elements/Loader"



export const HomePage = () => {
    const auth = useSelector(state => state.auth);

    if(auth.loaded){

        if(!auth.is_authenticated){
            return <Navigate to="/login"/>
        }
        if(auth.account_type === "admin") {
            return <Navigate to ="/admin"/>}
        
        if(auth.account_type === "user") {
            return <Navigate to ="/dashboard"/>
        }
      }  


    return (<Loader/>)
 } 
