import React, { useContext } from "react";
import { AppContext } from "../App1";

function ComponentC() {
  const { stateC, setStateC } = useContext(AppContext);
  console.log('Component C Render');

  return (
    <>
      <label>{stateC}</label>
      <button onClick={() => setStateC(stateC + 1)}>+</button>
    </>
  )
}

export default ComponentC;
