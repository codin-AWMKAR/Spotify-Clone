import React from 'react';
import "./Login.css";
import Logo from "./assets/Logo.png"
import{ loginUrl } from  './spotify'

function Login() {
  return (
   <div className="login">
    
    <img src={Logo} alt=""/>
    
    {/* Login with spotify button */}
    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
   </div>
  )
}

export default Login;