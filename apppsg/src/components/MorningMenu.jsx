import React, { useState } from 'react'
import './MorningMenu.css';
import Footer from "./Footer";

export const MorningMenu = () => {

  const [bshow,bsetshow] = useState(true);
  const [sshow,ssetshow] = useState(false);
  const [fshow,fsetshow] = useState(false);

  const bshowname =()=>{
    if(bshow === true){}
    else{    
      bsetshow(true)
      ssetshow(false)
      fsetshow(false)
    }
  }
  const sshowname =()=>{
    if(sshow === true){}
    else{
      ssetshow(true)
      fsetshow(false)
      bsetshow(false)
    }
  }
  const fshowname =()=>{
    if(fshow === true){}
    else{
      fsetshow(true)
      bsetshow(false)
      ssetshow(false)
    }
  }

  return (
    <div className='morningmenu'>
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
            <li onClick={bshowname}>BREAKFAST</li>
            <li onClick={sshowname}>SNACKS</li>
            <li onClick={fshowname}>FRESH JUICES & MILKSHAKES</li>
          </ul>
        </nav>
        {
          bshow?<ul className='breakfast'>
          <li>POORI</li>
          <li>MASALA DOSA</li>
          <li>ONION DOSA</li>
          <li>UTHAPPAM</li>
          <li>PONGAL</li>
          <li>GHEE ROAST</li>
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