import React, {useState, useEffect} from 'react';
import UserProfile from './UserProfile';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

function Profile() {

    const [username, setUsername] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleLogOut = (e) => {
        e.preventDefault();
        UserProfile.setKey('');
        setRedirect(true);
    }

    if(redirect) return (<Redirect to="/dashboard"/>);

    return(
        <div className="Profile">
            <h1 className = "ProfileGreeting">Hi, {username}!</h1>
            <button className="LogOut" onClick={handleLogOut}>Log Out.</button>

        </div>
    );
}

export default Profile;