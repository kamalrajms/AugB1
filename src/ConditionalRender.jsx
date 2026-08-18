import React from "react";

export default function ConditionalRender() {
  const user = true;
  return (
    <div>
      <h2>Conditional rendering</h2>
      {user ? <p>welcome back...!</p> : <p>please login</p>}
      <h2>Logical operator</h2>
      {user && (
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum
          ea excepturi repudiandae similique porro laborum doloremque, at nam
          nulla, consequatur aliquam aut officiis. Magni eum in cum natus
          necessitatibus.
        </h4>
      )}
    </div>
  );
}
