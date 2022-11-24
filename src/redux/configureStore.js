import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categories from './categories/categories';
import coin from './coins/coin';
import coins from './coins/coins';

const rootReducer = {
  reducer: {
    cat: categories,
    coins: coins,
    coin: coin,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
