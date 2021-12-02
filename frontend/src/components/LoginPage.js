import "./LoginPage.css"
import React, { useCallback, useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  import axios from "axios";
  import UserProfile from "./UserProfile";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleChangeEmail = useCallback(
        (event) => {
            setEmail(event.target.value)
        }, [],
    );
    const handleChangePassword = useCallback(
        (event) => {
            setPassword(event.target.value)
        }, [],
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:4000/user/login", {email: email, password: password})
            .then( res => {
                console.log(res);
                UserProfile.setKey(res.data.token);
                setRedirect(true);
            });
    }

    if(redirect) return( <Redirect to="/dashboard" />)

    return(
        <div className="LoginPage">

            <div className = "TitleBox">
                <h1>Political Dashboard</h1>
                <h3> For something something something.</h3>
            </div>

            <div className="LoginBox">
                <h2 className ="LoginHeader">Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <br/>
                        <input className="TextInput" type="text" value={email} onChange ={handleChangeEmail}></input>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input className="TextInput" type="password" value={password} onChange={handleChangePassword}></input>
                    </label>
                    <br/>
                    <input className="Submit" type="submit" value="Login" />
                </form>
                <div className = "CreateAccount">
                <Link style = {{textDecoration: 'none'}} to="signup">Or Create An Account</Link>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;