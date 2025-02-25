import React, { useState } from "react";

const UserGreeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    } else {
      setGreeting("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Greet Me</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default UserGreeting;
