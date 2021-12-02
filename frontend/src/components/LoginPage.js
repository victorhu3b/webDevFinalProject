import "./LoginPage.css"
import React, { useCallback, useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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

    return(
        <div className="LoginPage">

            <div className = "TitleBox">
                <h1>Political Dashboard</h1>
                <h3> For something something something.</h3>
            </div>

            <div className="LoginBox">
                <h2 className ="LoginHeader">Login</h2>
                <form>
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
                <Link to="signup">Or Create An Account</Link>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;