import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <h2>Mission Stats: {context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Chose to accept</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context Api</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
