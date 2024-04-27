import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
    <section className="homebody">
    <nav>
    <img src="/images/logo_psg4u.png" alt="PSG4U Logo" className="homelogo"/>

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className = "home">
      <h1>THE STUDENT'S SPACE</h1>
      <i>Where all the needs are met</i>
    </div>
      <button className="loginbutton"><Link to={'/login'} class="link">Login</Link></button>
      </section>

      <section className = "about_body">
        <h1><i> About PSG4U</i></h1>
      </section>
      
    </div>
    
  )
}

export default Home
