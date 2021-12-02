import './App.css';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import AboutTxt from "./components/AboutTxt";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
    <CookiesProvider>
    <div className="App">
            <Switch>
                <Route path="/about">
                  <Navbar/>
                    <AboutTxt/>
                </Route>
                <Route path="/dashboard">
                  <Navbar/>
                    <Dashboard/>
                </Route>
                <Route path="/profile">
                  <Navbar/>
                    <Profile/>
                </Route>
                <Route path="/signup">
                  <Navbar/>
                  <SignUpPage/>
                </Route>
                <Route path="/login">
                  <Navbar/>
                  <LoginPage/>
                </Route>
                <Route path="/">
                  <Navbar/>
                  <LoginPage/>
                </Route>
            </Switch>
    </div>
    </CookiesProvider>
    </BrowserRouter>
  
  );
}

export default App;
