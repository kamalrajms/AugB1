import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("good");
  console.log(name);

  const [check, setCheck] = useState(true);
  return (
    <div>
      <h2>Controlled text input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>name:{name}</h2>

      <h2>Chech box</h2>
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
    </div>
  );
}
