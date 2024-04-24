import React from 'react'
import './Home.css';
const Home = () => {
  return (
    <div>
    <nav>
    <img src="/images/logo_psg4u.png" alt="PSG4U Logo" />

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className = "home">
      <h1>THE STUDENT'S SPACE</h1>
      <i>Where all the needs are met</i>
      <button>Login </button>
    </div>
    </div>
  )
}

export default Home
