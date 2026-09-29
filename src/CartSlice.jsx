import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const item = state.items.find(
        (cartItem) => cartItem.name === name
      );

      if (item) {
        item.quantity = quantity;
      }

      if (quantity <= 0) {
        state.items = state.items.filter(
          (cartItem) => cartItem.name !== name
        );
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
