import React from 'react'
import './Main.css';
import logo from './images/logo_psg4u.png'
import homelogo from './images/homelogo.png'
import personlogo from './images/personlogo.png'
import emoji from './images/emoji.png'
import clip from './images/clip.png'

export const Main = () => {
  return (
    <div className='main'>
      <nav className='navbar'>
      <img src={logo} alt="PSG4U Logo" className='homelogo'/>
        <ul>
          <img src={homelogo} className='homeimg'/>
          <li>Home</li>
          <img src={personlogo} className='personimg'/>
          <li>My account</li>
          <li className='logout'>Logout</li>
        </ul>
      </nav>
      
        <div className='studies'>
            <img src={clip} className='clip'/>
            <div className='title'>Studies</div>
            

            <img src={emoji} className='emoji1'/>
            <p>Calculate GPA</p>
            <img src={emoji} className='emoji2'/>
            <p>Level-up Links</p>
            <img src={emoji} className='emoji3'/>
            <p>Book a classroom for pre-works</p>
            <img src={emoji} className='emoji4'/>
            <p>Event updates</p>      
        </div>

        <div className='studies' id='query'>
            <img src={clip} className='clip'/>
            <div className='title'>Raise query</div>
            

            <img src={emoji} className='emoji1'/>
            <p>Raise Query about components</p>
            <img src={emoji} className='emoji2'/>
            <p>Lost and found</p>
               
        </div>

        <div className='studies' id='canteen'>
            <img src={clip} className='clip'/>
            <div className='title'>Canteen</div>
            

            <img src={emoji} className='emoji1'/>
            <p>Morning menu</p>
            <img src={emoji} className='emoji2'/>
            <p>Afternoon menu</p>    
        </div>
        <footer className='mainfooter'>
                <p>&#169; PSG College of Technology</p>
                <p class="help">Help & Support @contact_details</p>
        </footer>
    </div>
  )
}
