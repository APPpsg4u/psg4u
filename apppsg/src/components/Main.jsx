import React from 'react'
import './Main.css';
import {Link} from "react-router-dom";

export const Main = () => {
  return (
    <div className='main'>
      <nav className='navbar'>
      <img src="/images/logo_psg4u.png" alt="PSG4U Logo" className='homelogo'/>
        <ul>
          <img src="/images/homelogo.png" className='homeimg' alt='homeimg'/>
          <li>Home</li>
          <img src="/images/person.png" className='personimg' alt='personimg'/>
          <li>My account</li>
          <li className='logout'>Logout</li>
        </ul>
      </nav>
      
        <div className='studies'>
            <img src="/images/clip.png" className='clip' alt='clip'/>
            <div className='title'>Studies</div>
            

            <img src="/images/emoji.png" className='emoji1' alt='emoji1'/>
            <p>Calculate GPA</p>
            <img src="/images/emoji.png" className='emoji2' alt='emoji2'/>
            <p>Level-up Links</p>
            <img src="/images/emoji.png" className='emoji3' alt='emoji3'/>
            <p>Book a classroom for pre-works</p>
            <img src="/images/emoji.png" className='emoji4' alt='emoji4'/>
            <p><Link to={'/events'}>Event updates</Link></p>      
        </div>

        <div className='studies' id='query'>
            <img src="/images/clip.png" className='clip' alt='clip'/>
            <div className='title'>Raise query</div>
            

            <img src="/images/emoji.png" className='emoji1' alt='emoji1'/>
            <p>Raise Query about components</p>
            <img src="/images/emoji.png" className='emoji2' alt='emoji2'/>
            <p>Lost and found</p>
               
        </div>

        <div className='studies' id='canteen'>
            <img src="/images/clip.png" className='clip' alt='clip'/>
            <div className='title'>Canteen</div>
            

            <img src="/images/emoji.png" className='emoji1' alt='emoji1'/>
            <p>Morning menu</p>
            <img src="/images/emoji.png" className='emoji2' alt='emoji2'/>
            <p>Afternoon menu</p>    
        </div>
        <footer className='mainfooter'>
                <p>&#169; PSG College of Technology</p>
                <p class="help">Help & Support @contact_details</p>
        </footer>
    </div>
  )
}
