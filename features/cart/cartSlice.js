import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // Recalculate totals
      state.totalQuantity = state.cartItems.reduce(
        (sum, i) => sum + i.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.quantity * i.price,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== id);

      // Recalculate totals
      state.totalQuantity = state.cartItems.reduce(
        (sum, i) => sum + i.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.quantity * i.price,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove item if quantity is 1 and user decreases again
          state.cartItems = state.cartItems.filter((i) => i.id !== id);
        }

        // Recalculate totals
        state.totalQuantity = state.cartItems.reduce(
          (sum, i) => sum + i.quantity,
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (sum, i) => sum + i.quantity * i.price,
          0
        );
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
