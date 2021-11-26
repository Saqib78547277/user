import React from "react";
import "./App.css";
import Object from "./Object";

function App() {
  return (
    <div className="container">
      <div className="item2">
        <div className="innercontainer">
          {Object.map((items) => {
            return (
              <>
                <div className="inneritem1">
                  <div className="img">
                    <img src={items.image} />
                  </div>
                  <div className="heading">
                    <h4>{items.username}</h4>
                    <p>{items.places}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
