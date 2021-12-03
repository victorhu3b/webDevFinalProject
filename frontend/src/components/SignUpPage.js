import "./SignUpPage.css"
import React, { useCallback, useState } from 'react';
import axios from "axios";
import UserProfile from "./UserProfile";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

function SignUpPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleChangeEmail = useCallback(
        (event) => {
            setEmail(event.target.value)
        }, [],
    );
    const handleChangeUsername = useCallback(
        (event) => {
            setUsername(event.target.value)
        }, [],
    );
    const handleChangePassword = useCallback(
        (event) => {
            setPassword(event.target.value)
        }, [],
    );
    const handleChangeAddress = useCallback(
        (event) => {
            setAddress(event.target.value)
        }, [],
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:4000/user/signup", {username: username, address: address, email: email, password: password})
            .then( res => {
                console.log(res);
                UserProfile.setKey(res.data.token);
                setRedirect(true);
            });
    }

    // Redirect once signup has been completed
    if(redirect) return (<Redirect to="/dashboard"/>);

    return(
        <div className="SignUpPage">

            <div className="SignUpBox">
                <h2 className ="SignUpHeader">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <br/>
                        <input className="TextInput" type="text" value={username} onChange ={handleChangeUsername}></input>
                    </label>
                    <label>
                        Email:
                        <br/>
                        <input className="TextInput" type="text" value={email} onChange ={handleChangeEmail}></input>
                    </label>
                    <label>
                        Address:
                        <br/>
                        <input className="TextInput" type="text" value={address} onChange ={handleChangeAddress}></input>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input className="TextInput" type="password" value={password} onChange={handleChangePassword}></input>
                    </label>
                    <br/>
                    <input className="Submit" type="submit" value="Sign Up" />
                </form>
            </div>
        </div>

    );
}

export default SignUpPage;