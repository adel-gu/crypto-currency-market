import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const API_URL_COINS =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const API_URL_COIN = 'https://api.coingecko.com/api/v3/coins';

// Action String
const GET_COINS = 'get-coins';

// Actions thunks
export const retrieveCoins = createAsyncThunk(GET_COINS, async () => {
  const res = fetch(API_URL_COINS);
  const data = (await res).json();
  return data;
});

// Reducers
const coinsSlice = createSlice({
  name: 'CryptoCoins',
  initialState: {
    coins: [],
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveCoins.fulfilled, (state, action) => {
      state.coins = action.payload;
    });
  },
});

export default coinsSlice.reducer;
