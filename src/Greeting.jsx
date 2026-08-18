import React from "react";
import Hello from "./Hello";

export default function Greeting(props) {
  const name = "Bala";
  return (
    <div>
      <h1>react intro-- {name}</h1>
      <h2>
        name is -{props.firstName}
        {props.count}
      </h2>
      <Hello />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        hic corrupti ex voluptate beatae obcaecati excepturi vel ratione
        officia? Voluptate.
      </p>
    </div>
  );
}
