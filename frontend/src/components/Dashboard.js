import "./Dashboard.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserProfile from "./UserProfile";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

function Dashboard() {

    const [stateCutoff, setStateCutoff] = useState(0);
    const [muniCutoff, setMuniCutoff] = useState(0);
    const [politicians, setPoliticians] = useState([{name: "", title: "", phone: ""}]);
    const [loaded, setLoaded] = useState(false);
    const [elections, setElections] = useState([{name: "", date: ""}]);
    const [loadedElections, setLoadedElections] = useState(false);


    useEffect( () => {
        axios.get('https://00wv8es452.execute-api.us-east-2.amazonaws.com/elections').then( res => {

            console.log(res);
            var e = res.data.elections.map( election => {return {name: election.name, date: election.electionDay}})
            setElections(e);
            setLoadedElections(true);

        })
        axios.get('http://localhost:4000/user/search', {params: {user_key: UserProfile.getKey()} })
            .then( res => {
                console.log(res);

                var offices = res.data.offices;
                offices.splice(3, 0, offices[2]);
                var officials = res.data.officials;

                var idx = offices.findIndex(office => office.levels[0] === "administrativeArea1");
                setStateCutoff(idx);

                idx = (offices.findIndex(office => office.levels[0] === "administrativeArea2"));
                setMuniCutoff(idx);

                // zip the 2 arrays together
                var p = offices.map( (office, i) => {
                    return {name: officials[i].name, title: office.name, phone: officials[i].phones[0]};
                });

                setPoliticians(p);

                setLoaded(true);
            
            })
    }, []);

    return(
        <div className="Dashboard">
            <div className="Sidebar">
                <Link style = {{textDecoration: 'none'}} to="/dashboard" className="SidebarLink">Home</Link>
                <Link style = {{textDecoration: 'none'}} to="/dashboard/federal" className="SidebarLink">Federal</Link>
                <Link style = {{textDecoration: 'none'}} to="/dashboard/state" className="SidebarLink">State</Link>
                <Link style = {{textDecoration: 'none'}} to="/dashboard/municipal" className="SidebarLink">Municipal</Link>

            </div>
            <div className="Dash">

                <Switch>
                    <Route path="/dashboard/federal">
                        {loaded ?
                            <div className = 'cards'>
                            {politicians.slice(0, 4).map(p => (

                                <div className = 'card'>
                                    <h2>{p.name}</h2>
                                    <h4>{p.title}</h4>
                                    <p>{p.phone}</p>
                                </div>
                            ))}
                            </div>
                            : null
                        }
                    </Route>
                    <Route path="/dashboard/state">
                        {loaded ?
                            <div className = 'cards'>
                            {politicians.slice(stateCutoff, muniCutoff).map(p => (

                                <div className = 'card'>
                                    <h2>{p.name}</h2>
                                    <h4>{p.title}</h4>
                                    <p>{p.phone}</p>
                                </div>
                            ))}
                            </div>
                            : null
                        }
                    </Route>

                    <Route path="/dashboard/municipal">
                        {loaded ?
                            <div className = 'cards'>
                            {politicians.slice(muniCutoff).map(p => (

                                <div className = 'card'>
                                    <h2>{p.name}</h2>
                                    <h4>{p.title}</h4>
                                    <p>{p.phone}</p>
                                </div>
                            ))}
                            </div>
                            : null
                        }
                    </Route>
                    <Route path="/dashboard">
                        <h1 className = "DashboardGreeting">Welcome Back.</h1>
                        <h2 className="ElectionHeader">Upcoming Elections</h2>
                        {loadedElections ? 
                            <div className = 'ElectionCards'>
                            {elections.map(e => (

                                <div className = 'card'>
                                    <h2>{e.name}</h2>
                                    <p>{e.date}</p>
                                </div>
                            ))}
                            </div>


                        : null }
                    </Route>

                </Switch>

            </div>
        </div>

    );
}

export default Dashboard;