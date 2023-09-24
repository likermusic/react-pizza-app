import { createSlice } from '@reduxjs/toolkit'


export const stateSliceA = createSlice({
  name: 'stateA',
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
export const {increment,decrement} = stateSliceA.actions
export default stateSliceA.reducer