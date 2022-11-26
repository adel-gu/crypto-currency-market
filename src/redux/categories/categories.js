import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const API_URL = 'https://api.coingecko.com/api/v3/coins/categories/list';

// Actions String
const GET_CAT = 'get-categories';

// Action Thunk
export const retrieveCat = createAsyncThunk(GET_CAT, async () => {
  const res = fetch(API_URL);
  const data = (await res).json();
  return data;
});

// Reducers
const categoriesSlice = createSlice({
  name: 'CryptoCat',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(retrieveCat.fulfilled, (state, action) => action.payload);
  },
});

export default categoriesSlice.reducer;
