import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const apiGenerator = (filter) => {
  switch (filter) {
    case 'all':
      return 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    default:
      return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${filter}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  }
};

const API_URL_COIN = 'https://api.coingecko.com/api/v3/coins';

// Action String
const GET_COIN = 'get-coin';
const GET_COINS = 'get-coins';

// Actions thunks
export const retrieveCoins = createAsyncThunk(GET_COINS, async (filter) => {
  const res = fetch(apiGenerator(filter));
  const data = (await res).json();
  return data;
});

export const retrieveCoinDetails = createAsyncThunk(GET_COIN, async (id) => {
  const res = fetch(`${API_URL_COIN}/${id}`);
  const data = (await res).json();
  return data;
});

// Reducers
const coinsSlice = createSlice({
  name: 'CryptoCoins',
  initialState: {
    coins: [],
    coinDetails: {},
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveCoins.fulfilled, (state, action) => {
      state.coins = action.payload;
    });
    builder.addCase(retrieveCoinDetails.fulfilled, (state, action) => {
      state.coinDetails = action.payload;
    });
  },
});

export default coinsSlice.reducer;
