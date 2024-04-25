import React, { useState } from 'react'
import './AfternoonMenu.css';
import Footer from "./Footer";

export const AfternoonMenu = () => {

  const [bshow,bsetshow] = useState(true);
  const [sshow,ssetshow] = useState(false);
  const [fshow,fsetshow] = useState(false);

  const bshowname =()=>{
    if(bshow === true){  document.getElementById('b').style.fontWeight = "bold"}
    else{   
      document.getElementById('b').style.fontWeight = "bold" 
      document.getElementById('s').style.fontWeight = "normal"
      document.getElementById('f').style.fontWeight = "normal"
      bsetshow(true)
      ssetshow(false)
      fsetshow(false)
    }
  }
  const sshowname =()=>{
    if(sshow === true){}
    else{
      document.getElementById('b').style.fontWeight = "normal" 
      document.getElementById('s').style.fontWeight = "bold"
      document.getElementById('f').style.fontWeight = "normal"
      ssetshow(true)
      fsetshow(false)
      bsetshow(false)
    }
  }
  const fshowname =()=>{
    if(fshow === true){}
    else{
      document.getElementById('b').style.fontWeight = "normal" 
      document.getElementById('s').style.fontWeight = "normal"
      document.getElementById('f').style.fontWeight = "bold"
      fsetshow(true)
      bsetshow(false)
      ssetshow(false)
    }
  }

  return (
    <div className='afternoonmenu'>
      <nav className="eventsBar">
        <img src="/images/logo_psg4u.png" alt="psg4u logo" className="logo-events-page" />
        <div className="nav-list-events">
            <div className="nav">
                <img src="/images/homelogo.png" className="logo-events" alt="homelogo" />
                <a href="#home">Home</a>
            </div>
            <button className="logout-button">Logout</button>
        </div>
      </nav>

      <div className='foodmrng'>
        <nav>
          <ul className='foodmenu'>
            <li onClick={bshowname} id='b'>LUNCH</li>
            <li onClick={sshowname} id='s'>SNACKS</li>
            <li onClick={fshowname} id='f'>FRESH JUICES & MILKSHAKES</li>
          </ul>
        </nav>
        {
          bshow?<ul className='breakfast'>
          <li>LEMONRICE</li>
          <li>MEALS</li>
          <li>MUSHROOM BIRIYANI</li>
          <li>CURD RICE</li>
          <li>GOBI 65</li>
          <li>CURD RICE</li>
        </ul>:null
        }
        {
          sshow?<ul className='breakfast'>
          <li>MASAL VADAI</li>
          <li>SAMOSA</li>
          <li>BONDA</li>
          <li>BAJJI</li>
          <li>ULUNTHA VADA</li>       
        </ul>:null
        }
        {
          fshow?<ul className='breakfast'>
          <li>CAVIN'S MILKSHAKES</li>
          <li>ROSEMILK</li>
          <li>WATERMELON JUICE</li>
          <li>ORANGE JUICE</li>
          <li>APPLE JUICE</li>
        </ul>:null
        }        
      </div>
      <Footer />
    </div>

  )
}