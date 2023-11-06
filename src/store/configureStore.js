// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import invoiceReducer from '../reducers/invoiceSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    invoice : invoiceReducer
  },
});

export default store;
