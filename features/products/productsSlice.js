import { createSlice } from '@reduxjs/toolkit';

import Products from '../../constants/Products';

function initializeObject() {
  let products = {};
  // Mapping products and takes category names
  Products.map((product, i) => {
    const obj = {
      [product.category]: {},
    };
    const models = {};
    // Mapping models and takes model names of specific product
    Products[i].models.forEach((model) => {
      models[model.name] = {
        amount: 0,
        screen_name: model.screen_name,
        price: model.price,
      };
    });
    obj[product.category] = models;
    // Joins these two object
    products = { ...products, ...obj };
  });
  console.log(products);
  return products;
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: initializeObject(),
  reducers: {
    setPad: (state, action) => {
      switch (action.payload.type) {
        case 'STANDARD':
          state.PAD['STANDARD'].amount = action.payload.amount;
          break;
        case 'SUPER':
          state.PAD['SUPER'].amount = action.payload.amount;
          break;
        case 'SUPERPLUS':
          state.PAD['SUPERPLUS'].amount = action.payload.amount;
          break;
      }
    },
    resetPad: (state) => {
      state.PAD['STANDARD'].amount = 0;
      state.PAD['SUPER'].amount = 0;
      state.PAD['SUPERPLUS'].amount = 0;
    },
    setDailyPad: (state, action) => {
      switch (action.payload.type) {
        case 'DAILY':
          state.DAILYPAD['DAILY'].amount = action.payload.amount;
          break;
        case 'SUPERDAILY':
          state.DAILYPAD['SUPERDAILY'].amount = action.payload.amount;
          break;
      }
    },
    resetDailyPad: (state) => {
      state.DAILYPAD['DAILY'].amount = 0;
      state.DAILYPAD['SUPERDAILY'].amount = 0;
    },
    setTampon: (state, action) => {
      switch (action.payload.type) {
        case 'MINI':
          state.TAMPON['MINI'].amount = action.payload.amount;
          break;
        case 'STANDARD':
          state.TAMPON['STANDARD'].amount = action.payload.amount;
          break;
      }
    },
    resetTampon: (state) => {
      state.TAMPON['MINI'].amount = 0;
      state.TAMPON['STANDARD'].amount = 0;
    },
  },
});

export const { setPad, setDailyPad, setTampon, resetPad, resetDailyPad, resetTampon } =
  productsSlice.actions;

export default productsSlice.reducer;
