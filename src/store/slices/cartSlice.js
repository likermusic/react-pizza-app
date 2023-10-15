import { createSlice } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzasSlice";

//Получили pizzas из pizzasSlice
const initialState = {
  items: [],  [{id:1,imageUrl, title, price,qty:3}]
  total: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload.id;
      const ind = state.items.findIndex((item) => item.id == id);
      if (ind == -1) {
        state.items.push({ ...action.payload, qty: 1 });
      } else {
        state.items[ind].qty += 1;
      }

      //как прочитать state здесь
      // console.log(JSON.stringify(state.items));
      // state.count = state.items.reduce((count, item) => count + item.qty, 0);
      // state.total =
    },
    deleteItem(state, action) {},
  },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
