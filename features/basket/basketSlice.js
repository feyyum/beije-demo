import { createSlice } from '@reduxjs/toolkit';

// This slice just for the displaying basket item number on basket icon
export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    count: 0,
  },
  reducers: {
    addBasket: (state) => {
      state.count += 1;
    },
  },
});

export const { addBasket } = basketSlice.actions;

export default basketSlice.reducer;
