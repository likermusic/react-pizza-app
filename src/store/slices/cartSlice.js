import { createSlice } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzasSlice";

//Получили pizzas из pizzasSlice
const initialState = {
  items: [], // [{id:1,imageUrl, title, price,qty:3}]

  // [
  //   {
  //     "id": "1",
  //     "title",
  //     "imageUrl",
  //     "price",

  //     "details": [
  //       {
  //         "type":"0",
  //         "sizes": [{"size":"26","count":2},{"size":"30","count":1}]
  //       },
  //       {
  //         "type":"1",
  //         "sizes": [{"size":"26","count":3},{"size":"30","count":2}]
  //       }
  //     ]
  //   },
  // ]

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
        const { id, imageUrl, title, price, activeSize, activeType } =
          action.payload;

        const item = {
          id,
          imageUrl,
          title,
          price,
          details: [
            {
              type: activeType,
              sizes: [{ size: activeSize, qty: 1 }],
            },
          ],
        };
        state.items.push(item);
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
