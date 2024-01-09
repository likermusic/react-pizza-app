import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Type } from "../../types/pizza";

type Sort = {
  type: Type;
  isUp: boolean;
};

type FilterState = {
  category: number;
  sort: Sort;
  search: string;
};

const initialState: FilterState = {
  category: 0,
  sort: { type: 0, isUp: true },
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<FilterState["category"]>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<FilterState["search"]>) {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
