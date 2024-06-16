
import { createSlice } from '@reduxjs/toolkit';

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {},
  reducers: {
    setInvoice: (state, action) => {
      console.log(state,action)
      return {...state, rows : action.payload};
    }
  },
});

export const { setInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
