import React, { useState } from "react";

const GarandChild = (props) => {
  return (
    <div>
      <h3>GarandChild:</h3>
      <Child brandname={props.brandname} />
    </div>
  );
};

const Child = (props) => (
  <div>
    <h2>Child: {props.brandname}</h2>
  </div>
);

const App = () => {
  const [brandname] = useState("Amazon");
  return (
    <div>
      <h1>Hellow</h1>
      <GarandChild brandname={brandname} />
    </div>
  );
};

export default App;
