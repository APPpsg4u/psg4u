import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section className="homebody">
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
<<<<<<< HEAD
      <button>Login </button>
    </div>
=======
      <button className="loginbutton"><Link to={'/login'} class="link">Login</Link></button>
>>>>>>> 1c5bf9fab69a7e5bebfc1e98068e77eae99e5e18
    </div>
    </section>
  )
}

export default Home
