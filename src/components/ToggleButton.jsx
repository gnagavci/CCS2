import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className="toggle-container">
      <button
        className={isOn ? "toggle-btn on" : "toggle-btn off"}
        onClick={toggle}
      >
        {isOn ? "On" : "Off"}
      </button>
      <p>{isOn ? "The button is ON" : "The button is OFF"}</p>
    </div>
  );
};

export default ToggleButton;
