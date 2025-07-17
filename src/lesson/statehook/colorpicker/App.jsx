import React, { useState } from "react";
import {  }
import "./App.css";


function App() {
  const colors = [
    "#e74c3c",
    "#76d7c4",
    "#2471a3",
    "#d5d8dc",
    "#f0f3f4",
    "#d35400",
    "#d35400",
    "#6600FF",
  ];

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const handleOnChange = (e) => {
    setBackgroundColor()
  }
  return (
    <div className="app">
      <h1>Color picker</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <input type="color" value={backgroundColor} onChange={(e)=>{ }}></input>
    </div>
  );
}

export default App;
