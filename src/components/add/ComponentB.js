import React, { useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { increment,decrement } from '../../store-test/sliceB'

function ComponentB() {
  const stateB = useSelector((state) => state.stateB.value);
  const dispatch = useDispatch();

  console.log('Component B render');

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <label>{stateB}</label>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default ComponentB;
