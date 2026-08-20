import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  console.log(dark);

  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "50px",
      }}
    >
{/* 1 dark=false */}
{/* 2 dark=t */}
{/* 3 dark=f */}

      <button onClick={() => setDark(!dark)}>
        swith to {dark ? "light" : "dark"} mode
      </button>
      <p>you are in {dark ? "dark" : "Light"} mode</p>
    </div>
  );
}

// !true===false
// !false=== true
