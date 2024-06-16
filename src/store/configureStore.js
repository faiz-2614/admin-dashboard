// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import invoiceReducer from '../reducers/invoiceSlice';
import basicConfigReducer from '../reducers/basicConfigSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    invoice : invoiceReducer,
    basicConfig :basicConfigReducer
  },
});

export default store;
