import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
const API_URL_COIN = 'https://api.coingecko.com/api/v3/coins';

// Actions
const GET_COIN = 'get-coin';

// Action thunks
export const retrieveCoinDetails = createAsyncThunk(GET_COIN, async (id) => {
  const res = fetch(`${API_URL_COIN}/${id}`);
  const data = (await res).json();
  return data;
});

// Reducers
const coinSlice = createSlice({
  name: 'CryptoCoins/Coin',
  initialState: {
    coinDetails: {},
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveCoinDetails.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(retrieveCoinDetails.fulfilled, (state, action) => ({
      ...state,
      coinDetails: action.payload,
      loading: false,
    }));
  },
});

export default coinSlice.reducer;
