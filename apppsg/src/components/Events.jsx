import React from "react";
import './Events.css';
import Carousel from './Carousel';
import CarouselGrid from './CarouselGrid';

function Events(){
    return (
        <div className="events-page">
            <nav className="eventsBar">
                <img src="/images/logo_psg4u.png" alt="psg4u logo" className="logo-events-page"/>
                <div className="nav-list-events">
                    <div className="nav">
                        <img src="/images/homelogo.png" className="logo-events" alt="homelogo"/>
                        <a href="#home">Home</a>
                    </div>
                    <div className="nav">
                        <img src="/images/trackstatuslogo.png" className="logo-events" alt="trackstatuslogo"/>
                        <a href="#track">Track Status</a>
                    </div>
                    <button className="logout-button">Logout</button>
                </div>
            </nav>
            <hr />
            <div className="eventUpdates">
                <h1>EVENT UPDATES</h1>
                <div className="eventdetails">
                    <h3 className="detail-title">UPCOMING EVENTS:</h3>
                    <Carousel />
                    <h3 className="detail-title">RECENT EVENTS:</h3>
                    <Carousel />
                    <h3 className="detail-title">MONTH-APRIL</h3>
                    <CarouselGrid />
                </div>
                <footer>
                    <p>&#169; PSG College of Technology</p>
                    <p class="help">Help & Support @contact_details</p>
                </footer>
            </div>
        </div>
    );
}

export default Events;