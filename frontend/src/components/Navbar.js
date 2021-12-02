import "./Navbar.css";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Dashboard from "./Dashboard";

function Navbar() {
    return (
        <BrowserRouter>
            <nav>
                <div className="Navbar">
                    <Link style = {{textDecoration: 'none'}} to="/about" className = "NavLink">About</Link>
                    <Link style = {{textDecoration: 'none'}} to="/dashboard" className = "NavLink">Dashboard</Link>
                    <Link style = {{textDecoration: 'none'}} to="/profile" className = "NavLink">Profile</Link>
                </div>
            </nav>
            <Switch>
                <Route path="/about">
                    <h1>abc</h1>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/profile">
                  <LoginPage/>
                </Route>
                <Route path="/signup">
                  <SignUpPage/>
                </Route>
                <Route path="/">
                  <LoginPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Navbar;