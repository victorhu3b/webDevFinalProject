import "./Navbar.css";
import React, {useState} from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AboutTxt from "./AboutTxt";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import Profile from "./Profile";

function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false);

    if(UserProfile.getKey() != "" && !loggedIn) setLoggedIn(true);
    else if(UserProfile.getKey() == ""  && loggedIn) setLoggedIn(false);

    return (
            <nav>
                <div className="Navbar">
                    <Link style = {{textDecoration: 'none'}} to="/about" className = "NavLink">About</Link>
                    <Link style = {{textDecoration: 'none'}} to="/dashboard" className = "NavLink">Dashboard</Link>

                    {loggedIn ?
                        (<Link style = {{textDecoration: 'none'}} to="/profile" className = "NavLink">Profile</Link>)
                    :
                        (<Link style = {{textDecoration: 'none'}} to="/login" className = "NavLink">Login</Link>)
                    }
                </div>
            </nav>
    );
}

export default Navbar;