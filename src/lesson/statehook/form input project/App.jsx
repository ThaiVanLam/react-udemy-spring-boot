import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Form Example</h1>
        <div className="text-block">
          <label>Text:</label>
          <input type="text" onChange={(e) => setText(e.target.value)}></input>
        </div>

        <div className="checkbox-block">
          <label>
            <input
              type="checkbox"
              onChange={(e) => setCheckbox(e.target.checked)}
            ></input>
            Checkbox
          </label>
        </div>

        <div className="radio-block">
          <label>Radio:</label>
          <label>
            <input
              type="radio"
              name="example-radio"
              value="option1"
              onChange={(e) => setRadio(e.target.value)}
            ></input>
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="example-radio"
              value="option2"
              onChange={(e) => setRadio(e.target.value)}
            ></input>
            Option 2
          </label>
        </div>
        <div className="select-block">
          <label>Select:</label>
          <select name="select" onChange={(e) => setSelect(e.target.value)}>
            <option value="">-- Choose an option --</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
          </select>
        </div>
      </div>

      <div className="form-data">
        <h3>Form Data</h3>
        <p>
          <strong>Text: </strong>
          {text || "N/A"}
        </p>
        <p>
          <strong>Checkbox: </strong>
          {checkbox === true ? "checked" : "unchecked"}
        </p>
        <p>
          <strong>Radio: </strong>
          {radio || "N/A"}
        </p>
        <p>
          <strong>Select: </strong>
          {select || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default App;
