import React, { useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { increment,decrement } from '../../store-test/sliceA'


function ComponentA() {
  const stateA = useSelector((state) => state.stateA.value);
  const dispatch = useDispatch();

  console.log('Component A render');
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <label>{stateA}</label>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default ComponentA;
