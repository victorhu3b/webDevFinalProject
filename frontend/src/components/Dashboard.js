import "./Dashboard.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserProfile from "./UserProfile";

function Dashboard() {

    const [rep, setRep] = useState("Loading");

    useEffect( () => {
        axios.get('https://qxz9rxsm71.execute-api.us-east-2.amazonaws.com/address/226%20West%20End%20Ave%20Green%20Brook%20NJ')
            .then( res => {
                console.log(res)
                const representative = res.representative;
                setRep(representative);
            })
    }, []);

    return(
        <div className="Dashboard">
            <div className="Sidebar">
                <a className="SidebarLink">Test</a>
                <a className="SidebarLink">{UserProfile.getKey()}</a>
                <a className="SidebarLink">{rep}</a>

            </div>
            <div className="Dash">

            </div>
        </div>

    );
}

export default Dashboard;