import React, { useContext } from "react";
import { AppContext } from "../App1";


function ComponentA() {
  const { stateA, setStateA } = useContext(AppContext);
  console.log('Component A Render');
  return (
    <>
      <label>{stateA}</label>
      <button onClick={() => setStateA(stateA + 1)}>+</button>
    </>
  )
}

export default ComponentA;
