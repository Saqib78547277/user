import React from 'react'
import './App.css'
function Navbar() {
    function togglemenu(){
        document.getElementById('navbar')?.classList.toggle('active');
      }
    return (
        <div className='container'>
            <div className="item1">
          <div className="logo"><h6>USER PLACES</h6></div>
          <div className="menu" onClick={togglemenu} ><img src="icons8-menu-50.png" alt="Toggle menu"/></div>
          <nav id="navbar">
              <a href="#all users">ALL USERS</a>
              <a href="#sign in">SIGN IN</a>
              <a href="#sign up">SIGN UP</a>
            </nav>
      </div>
        </div>
    )
}
export default Navbar;
