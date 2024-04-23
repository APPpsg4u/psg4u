import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className="homebody">
    <nav>
    <img src="/images/logo_psg4u.png" alt="PSG4U Logo" class="homelogo"/>

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className = "home">
      <h1>THE STUDENT'S SPACE</h1>
      <i>Where all the needs are met</i>
      <button className="loginbutton"><Link to={'/login'} class="link">Login</Link></button>
    </div>
    </div>
  )
}

export default Home
