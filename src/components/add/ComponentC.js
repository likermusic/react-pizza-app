import React, { useContext } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { increment,decrement } from '../../store-test/sliceC'


function ComponentC() {
  const stateC = useSelector((state) => state.stateC.value);
  const dispatch = useDispatch();

  console.log('Component C render');

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <label>{stateC}</label>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default ComponentC;
