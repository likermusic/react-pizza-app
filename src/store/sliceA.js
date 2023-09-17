import { createSlice } from '@reduxjs/toolkit'


export const stateSliceA = createSlice({
  name: 'stateA',
  initialState: 0,
  reducers: {
    increment: function (state) {
      state.value += 1
    }
  }
})

export const increment = stateSliceA.actions
export default stateSliceA.reducer