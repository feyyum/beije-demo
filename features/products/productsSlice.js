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
      models[model.name] = 0;
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
          state.PAD['STANDARD'] = action.payload.amount;
          break;
        case 'SUPER':
          state.PAD['SUPER'] = action.payload.amount;
          break;
        case 'SUPERPLUS':
          state.PAD['SUPERPLUS'] = action.payload.amount;
          break;
      }
    },
    setDailyPad: (state, action) => {
      switch (action.payload.type) {
        case 'DAILY':
          state.DAILYPAD['DAILY'] = action.payload.amount;
          break;
        case 'SUPERDAILY':
          state.DAILYPAD['SUPERDAILY'] = action.payload.amount;
          break;
      }
    },
    setTampon: (state, action) => {
      switch (action.payload.type) {
        case 'MINI':
          state.TAMPON['MINI'] = action.payload.amount;
          break;
        case 'STANDARD':
          state.TAMPON['STANDARD'] = action.payload.amount;
          break;
      }
    },
  },
});

export const { setPad, setDailyPad, setTampon } = productsSlice.actions;

export default productsSlice.reducer;
