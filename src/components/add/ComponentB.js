import React, { useContext } from "react";
import { AppContext } from "../App1";

function ComponentB() {
  const { stateB, setStateB } = useContext(AppContext);
  console.log('Component B Render');

  return (
    <>
      <label>{stateB}</label>
      <button onClick={() => setStateB(stateB + 1)}>+</button>
    </>
  )
}

export default ComponentB;
