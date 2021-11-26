import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from './App';
import SignUp from './forms/SignUp';
import Login from './forms/Login';

function Header() {
  function togglemenu(){
    document.getElementById('navbar')?.classList.toggle('active');
  }
    return (
      


      
        <Router>
          
          <div className='container'>
            <div className="item1">
          <div className="logo"><h6>USER PLACES</h6></div>
          <div className="menu" onClick={togglemenu} ><img src="icons8-menu-50.png" alt="Toggle menu"/></div>
          <nav id="navbar">
          <Link  to="/">ALL USERS</Link>
          <Link to="/signin">SIGN IN</Link>
          <Link to="/signup">SIGN UP</Link>
            </nav>
      </div>
        </div>

      <hr />

      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/signin" element={<Login />}>
        </Route>
        <Route path="/signup" element={<SignUp />}>
          
        </Route>
      </Routes>
      
    </Router>
    )
}

export default Header
