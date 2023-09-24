import { createSlice } from '@reduxjs/toolkit'


export const stateSliceC = createSlice({
  name: 'stateC',
  initialState: {value:0},
  reducers: {
    increment: function (state) {
      state.value += 1
    },
    decrement: function (state) {
      state.value -= 1
    }
  }
})

// console.log(stateSliceA.actions);
export const {increment,decrement} = stateSliceC.actions
export default stateSliceC.reducer