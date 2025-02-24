import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div>
      <button onClick={toggle}>{isOn ? "On" : "Off"}</button>
      <p>{isOn ? "The button is ON" : "The button is OFF"}</p>
    </div>
  );
};

export default ToggleButton;
