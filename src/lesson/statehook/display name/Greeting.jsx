import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Xin chào, {name || "bạn"}</h2>
    </div>
  );
}

export default Greeting;
