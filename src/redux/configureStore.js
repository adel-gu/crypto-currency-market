import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categories from './categories/categories';

const rootReducer = {
  reducer: {
    cat: categories,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
