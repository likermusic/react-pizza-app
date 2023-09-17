import React, { useState } from 'react'
import ComponentA from './add/ComponentA';
import ComponentB from './add/ComponentB';
import ComponentC from './add/ComponentC';

function App1() {
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);
  const [stateC, setStateC] = useState(0);
  return (
    <>
      <ComponentA />
      <br />
      <ComponentB />
      <br />
      <ComponentC />
    </>
  )
}

export default App1