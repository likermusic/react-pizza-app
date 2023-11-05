import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetch(
        'https://64d8ae0a5f9bf5b879ce72a8.mockapi.io/items'
      );
      if (!resp.ok) {
        throw new Error('Данные не пришли');
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state, action) => {
        console.log('Loading data...');
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        console.log('Success');
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;

// {
// pizzas: [
//   {},
//   {}
// ]
// cart: []

// }
