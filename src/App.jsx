import React from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import ConditionalRender from "./ConditionalRender";

export default function App() {
  const name22 = "Props";
  const count = 55;

  const name = "kamal";
  const age = "24";
  const city = "salem";

  const name2 = "rahul";
  const age2 = "2455";
  const city2 = "namakkal";

  const name3 = "hari";
  const age3 = "2884";
  const city3 = "chennai";
  return (
    <>
      <ConditionalRender />
      <h1>hello world---{name22}</h1>
      <Greeting firstName={name22} count={count} />
      <DestructuringProps name={name} age={age} city={city} />
      <DestructuringProps name={name2} age={age2} city={city2} />
      <DestructuringProps name={name3} age={age3} city={city3} />
    </>
  );
}
