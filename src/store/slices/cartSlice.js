import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 1,
  count: 2
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload; 
      state.items = 
    },
    deleteItem(state, action) {

    }
  }
})

export const {addItem,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;