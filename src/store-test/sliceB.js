import { createSlice } from '@reduxjs/toolkit'


export const stateSliceB = createSlice({
  name: 'stateB',
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
export const {increment,decrement} = stateSliceB.actions
export default stateSliceB.reducer