import "./Navbar.css";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function Navbar() {
    return (
        <BrowserRouter>
            <nav>
                <div className="Navbar">
                    <Link to="/about" className = "NavLink">About</Link>
                    <Link to="/dashboard" className = "NavLink">Dashboard</Link>
                    <Link to="/profile" className = "NavLink">Profile</Link>
                </div>
            </nav>
            <Switch>
                <Route path="/about">
                    <h1>abc</h1>
                </Route>
                <Route path="/dashboard">
                    <h1>abc</h1>
                </Route>
                <Route path="/profile">
                  <LoginPage/>
                </Route>
                <Route path="/signup">
                  <SignUpPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Navbar;