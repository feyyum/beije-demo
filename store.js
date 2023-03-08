import { configureStore } from '@reduxjs/toolkit';

import basketReducer from './features/basket/basketSlice';
import productReducer from './features/products/productsSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
  },
});
