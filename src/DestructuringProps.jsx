import React from "react";
import Structure from "./Destructure.module.css"

export default function DestructuringProps({ name,age,city }) {
  return (
    <div className={Structure.destructure}>
      <h2>name:{name}</h2>
      <h2>age:{age}</h2>
      <h2>City:{city}</h2>
    </div>
  );
}
