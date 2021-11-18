import React from "react";
import "./App.css";


function App() {

  function togglemenu(){
    document.getElementById('navbar')?.classList.toggle('active');
  }
  // function togglemenumove(){
  //   document.getElementById('navbar')?.classList.toggle('unactive')
  //   console.log("togle move")
  // }
  return (
    
    <div className="container" >
      <div className="item1">
          <div className="logo"><h6>USER PLACES</h6></div>
          <div className="menu" onClick={togglemenu} ><img src="icons8-menu-50.png" alt="Toggle menu"/></div>
          <nav id="navbar">
              <a href="#all users">ALL USERS</a>
              <a href="#sign in">SIGN IN</a>
              <a href="#sign up">SIGN UP</a>
            </nav>
      </div>
      <div className="item2">
        <div className="innercontainer">
          <div className="inneritem1">
            <div className="img">
              <img src="th.jpg" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>Mirza Babar Muneer Baig</p>
                <p>3 Places</p>
              </div>
          </div>
          <div className="inneritem1">
            <div className="img">
              <img src="af7a6480430127ba8df9e168d71e44f9.jpg" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>Mirza Babar Muneer</p>
                <p>3 Places</p>
              </div>
          </div>
          <div className="inneritem1">
            <div className="img">
              <img src="791762.jpg" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>Mirza Babar 🐱</p>
                <p>3 Places</p>
              </div>
          </div>
          <div className="inneritem1">
            <div className="img">
              <img src="OIP.jpg" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>Bahu Balie 🤣🎉
                </p>
                <p>3 Places</p>
              </div>
          </div>
          <div className="inneritem1">
            <div className="img">
              <img src="wallpapertip_hacker-wallpaper_21361.jpg" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>Ali Muneer Baig</p>
                <p>3 Places</p>
              </div>
          </div>
          <div className="inneritem1">
            <div className="img">
              <img src="OIP.jpg" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>Mirza Ali Muneer👀</p>
                <p>3 Places</p>
              </div>
          </div>
          <div className="inneritem1 center1">
            <div className="img">
              <img src="th.jpg" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>muneer Baig</p>
                <p>3 Places</p>
              </div>
          </div>
          <div className="inneritem1">
            <div className="img">
              <img src="menu.png" alt="th.jpg" />
            </div>
            <div className="heading">
                <p>Mirza Babar Baig</p>
                <p>3 Places</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
