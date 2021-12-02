import "./SignUpPage.css"
import React, { useCallback, useState } from 'react';

function SignUpPage() {

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
        <div className="SignUpPage">

            <div className="SignUpBox">
                <h2 className ="SignUpHeader">Sign Up</h2>
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
                    <input className="Submit" type="submit" value="Sign Up" />
                </form>
            </div>
        </div>

    );
}

export default SignUpPage;