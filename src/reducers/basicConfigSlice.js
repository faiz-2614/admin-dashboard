
import { createSlice } from '@reduxjs/toolkit';

const basicConfigSlice = createSlice({
  name: 'basicConfig',
  initialState: {
    invoiceFields : []
  },
  reducers: {
    setInvoiceFields: (state, action) => {
      console.log(state,action)
      return {...state, invoiceFields : action.payload};
    }
  },
});

export const { setInvoiceFields } = basicConfigSlice.actions;
export default basicConfigSlice.reducer;
