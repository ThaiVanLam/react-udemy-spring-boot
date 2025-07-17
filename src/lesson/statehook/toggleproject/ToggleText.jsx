import { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible === true && <p>đoạn văn bản!</p>}
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        click me!
      </button>
    </div>
  );
}

export default ToggleText;
