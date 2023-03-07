import { StyledLoginPage } from "./style"
import React, { useState } from 'react';
import { authUser } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const LoginPage = () =>{
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /*
  dispatch(send => {
      send({type : "LOGIN SUCCESS", payload : {username,password}})
  })
  */
  const handleSubmit = async event => {
    event.preventDefault();
  
    try{
      let data = await dispatch(authUser({username,password}));
      console.log("allo",data);
    }
    catch(err){
      console.log(err);
      alert(err.message);
    }
  };
  
  if(auth.is_authenticated){
    if(auth.account_type === "user"){
      return <Navigate to="/dashboard"/>
    }
    if(auth.account_type === "admin"){
      return <Navigate to="/admin"/>
    }
  }

    return (
        <StyledLoginPage>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                <span>Username:</span>
                <input
                    className="input-field"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
                </label>
                <label>
                <span>Password:</span>
                <input
                    className="input-field"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                </label>
                <button className="submit-button" type="submit">
                Login
                </button>
            </form>
        </StyledLoginPage>
    );
  }