import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "mango", "orange", "grapes"];

  const user = [
    { id: 1, name: "kamal" },
    { id: 2, name: "bala" },
    { id: 3, name: "hari" },
  ];

  const theme = {
    padding: "20px",
    backgroundColor: "red",
    color: "yellow",
  };
  return (
    <div style={theme}>
      <h2>list rendering</h2>
      <h2>fruits data</h2>
      {fruits.map((name, ind) => (
        <h3 key={ind}>
          {ind}
          {name}
        </h3>
      ))}

      <h2>user data</h2>
      {/* person= { id: 1, name: "kamal" } */}

      {user.length > 0 ? (
        <nav>
          {user.map((person) => (
            <h2 key={person.id}>{person.name}</h2>
          ))}
        </nav>
      ) : (
        <p>no data is found</p>
      )}
    </div>
  );
}
