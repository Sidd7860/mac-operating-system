import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = () => {

  // Full Screen toggle function
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="./navbar-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Zibran Ahmed Siddiqui</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        {/* Full Screen Icon */}
        <div className="nav-icon" onClick={toggleFullScreen} style={{ cursor: 'pointer' }}>
          <img src="./navbar-icons/fullscreen.svg" alt="Fullscreen" /> 
          {/* Agar fullscreen.svg nahi hai, toh aap koi bhi icon ya icon library use kar sakte hain */}
        </div>
        
        <div className="nav-icon">
          <img src="./navbar-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  )
}

export default Nav