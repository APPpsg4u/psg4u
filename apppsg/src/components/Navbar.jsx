import React from "react";
import './navbar.css';

function Navbar() {
    return <nav className="eventsBar">
        <img src="/images/logo_psg4u.png" alt="psg4u logo" className="logo-events-page" />
        <div className="nav-list-events">
            <div className="nav">
                <img src="/images/homelogo.png" className="logo-events" alt="homelogo" />
                <a href="#home">Home</a>
            </div>
            <div className="nav">
                <img src="/images/trackstatuslogo.png" className="logo-events" alt="trackstatuslogo" />
                <a href="#track">Track Status</a>
            </div>
            <button className="logout-button">Logout</button>
        </div>
    </nav>
}

export default Navbar;