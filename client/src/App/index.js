import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { DashBoard } from "../pages/DashBoard"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import setAuthToken from "../utils/setAuthToken";
import { loadUser } from "./actions";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Header } from "./theme/Header";
import { Admin } from "../pages/Admin";

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.token){
            setAuthToken(localStorage.token);
            dispatch(loadUser())
        }
        else {
            dispatch(d => d({type : "LOGOUT"}));
            setAuthToken(null);
        }
    }, []);
    
    return (
        <Router>
            <GlobalStyles/>
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/dashboard" element={<PrivateRoute account_type="user"><DashBoard/></PrivateRoute>}/>
                <Route exact path="/admin" element={<PrivateRoute account_type="admin"><Admin/></PrivateRoute>}/>


            </Routes>
        </Router>
    )
    /*
    return (
        <LoginPage/>
    )
    */
}