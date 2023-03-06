import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    pad: {
      standard: {
        price: 1,
        amount: 0,
      },
      super: {
        price: 1,
        amount: 0,
      },
      super_plus: {
        price: 1,
        amount: 0,
      },
    },
    daily_pad: {
      daily: {
        price: 1,
        amount: 0,
      },
      super_daily: {
        price: 1,
        amount: 0,
      },
    },
    tampon: {
      mini: {
        price: 1,
        amount: 0,
      },
      standard: {
        price: 1,
        amount: 0,
      },
    },
  },
  reducers: {
    setPad: (state, action) => {
      switch (action.payload.type) {
        case 'standard':
          state.pad.standard.amount = action.payload.amount;
          break;
        case 'super':
          state.pad.super.amount = action.payload.amount;
          break;
        case 'super_plus':
          state.pad.super_plus.amount = action.payload.amount;
          break;
      }
    },
    setDailyPad: (state, action) => {
      switch (action.payload.type) {
        case 'daily':
          state.daily_pad.daily.amount = action.payload.amount;
          break;
        case 'super_daily':
          state.daily_pad.super_daily.amount = action.payload.amount;
          break;
      }
    },
    setTampon: (state, action) => {
      switch (action.payload.type) {
        case 'mini':
          state.tampon.mini.amount = action.payload.amount;
          break;
        case 'standard':
          state.tampon.standard.amount = action.payload.amount;
          break;
      }
    },
  },
});

/*
    Dispatch data should be like this:
    dispatch(setTampon({type: 'daily', amount: 50}))
*/

export const { setPad, setDailyPad, setTampon } = productSlice.actions;

export default productSlice.reducer;
