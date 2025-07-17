import { useState } from "react";

function BackgroundColorChanger() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div style={{ backgroundColor: color, padding: 50 }}>
        box changing color
      </div>
      <button onClick={() => setColor("lightblue")}>light blue button</button>
      <button onClick={() => setColor("lightgreen")}>light green button</button>
      <button onClick={() => setColor("lightpink")}>light pink button</button>
    </>
  );
}

export default BackgroundColorChanger;
