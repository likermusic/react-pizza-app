import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzasSlice";
import { Size, Type, Pizza } from "../../types/pizza";

type ItemSize = {
  size: Size;
  qty: number;
};

type Detail = {
  type: Type;
  sizes: ItemSize[];
};

type CartItem = Pick<Pizza, "id" | "imageUrl" | "title" | "price"> & {
  totalQty: number;
  details: Detail[];
};

type CartState = {
  items: CartItem[];
  total: number;
  count: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(
      state,
      action: PayloadAction<
        Pick<Pizza, "id" | "imageUrl" | "title" | "price"> & {
          activeSize: Size;
          activeType: Type;
        }
      >
    ) {
      const { id, imageUrl, title, price, activeSize, activeType } =
        action.payload;
      // console.log(action.payload);
      const itemsInd = state.items.findIndex((item) => item.id == id);

      if (itemsInd == -1) {
        const item: CartItem = {
          id,
          imageUrl,
          title,
          price,
          totalQty: 1,
          details: [
            {
              type: activeType,
              sizes: [{ size: activeSize, qty: 1 }],
            },
          ],
        };
        state.items.push(item);
        state.count = state.count + 1;
        state.total = state.total + price;
      } else {
        const detailsTypeInd = state.items[itemsInd].details.findIndex(
          (el) => el.type == activeType
        );
        if (detailsTypeInd != -1) {
          const typeSizeInd = state.items[itemsInd].details[
            detailsTypeInd
          ].sizes.findIndex((el) => el.size == activeSize);
          if (typeSizeInd != -1) {
            state.items[itemsInd].details[detailsTypeInd].sizes[typeSizeInd]
              .qty++;
            state.items[itemsInd].totalQty++;
            state.count = state.count + 1;
            state.total = state.total + price;
          } else {
            const sizesItem: ItemSize = {
              size: activeSize,
              qty: 1,
            };
            state.items[itemsInd].details[detailsTypeInd].sizes.push(sizesItem);
            state.items[itemsInd].totalQty++;
            state.count = state.count + 1;
            state.total = state.total + price;
          }
        } else {
          const detailsItem: Detail = {
            type: activeType,
            sizes: [
              {
                size: activeSize,
                qty: 1,
              },
            ],
          };
          state.items[itemsInd].details.push(detailsItem);
          state.items[itemsInd].totalQty++;
          state.count = state.count + 1;
          state.total = state.total + price;
        }
      }
    },
    deleteItem(
      state,
      action: PayloadAction<
        Pick<Pizza, "id" | "imageUrl" | "title" | "price"> & {
          activeSize: Size;
          activeType: Type;
        }
      >
    ) {
      const { id, imageUrl, title, price, activeSize, activeType } =
        action.payload;
      state.items.forEach((item) => {
        if (item.id == id) {
          item.details.forEach((detailsItem) => {
            if (detailsItem.type == activeType) {
              detailsItem.sizes.forEach((sizesItem, ind) => {
                if (sizesItem.size == activeSize) {
                  if (sizesItem.qty <= 1) {
                    detailsItem.sizes.splice(ind, 1);
                  } else {
                    sizesItem.qty--;
                  }
                  item.totalQty--;
                  state.count--;
                  state.total = state.total - price;
                  if (state.count == 0) state.items = [];
                }
              });
            }
          });
        }
      });
    },

    clearItems(state) {
      state.items = [];
      state.count = 0;
      state.total = 0;
    },
  },
});

export const { addItem, deleteItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
