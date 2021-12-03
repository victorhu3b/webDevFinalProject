import React, {useState, useEffect} from 'react';
import './Profile.css'
import UserProfile from './UserProfile';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  import axios from 'axios';

function Profile() {

    const [username, setUsername] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:4000/user/me',  { params: { user_key: UserProfile.getKey()}})
            .then( res => {
                console.log(res);
                setUsername(res.data.username);
            })
    }, []);

    const handleLogOut = (e) => {
        e.preventDefault();
        UserProfile.setKey('');
        setRedirect(true);
    }

    if(redirect) return (<Redirect to="/login"/>);

    return(
        <div className="Profile">
            <h1 className = "ProfileGreeting">Hi, {username}!</h1>
            <button className="LogOut" onClick={handleLogOut}>Log Out.</button>
        </div>
    );
}

export default Profile;