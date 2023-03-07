import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { Loader } from "../../components/gui/elements/Loader"

export const PrivateRoute = ({children, account_type = null}) => {
    const auth = useSelector(state => state.auth);

    if(auth.loaded){

        if(!auth.is_authenticated){
            return <Navigate to="/login"/>
        }
        if(account_type && account_type !== auth.account_type){
            return <p> Unauthorized Access </p>
        }
        else {
            return (<>{children}</>)
        }
    }

    return (<Loader/>)

}