import { createSlice } from "@reduxjs/toolkit";

const loadCartFromSessionStorage = () => {
  const storedCart = sessionStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromSessionStorage(),
  reducers: {
    add: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        const product = {
          ...action.payload,
          quantity100x: 0,
          quantity1x: 1,
        };
        state.push(product);
        sessionStorage.setItem("cart", JSON.stringify(state));
      }
    },

    remove: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },

    incrementQuantity100x: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity100x += 1;
        sessionStorage.setItem("cart", JSON.stringify(state));
      }
    },

    decrementQuantity100x: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity100x > 0) {
        product.quantity100x -= 1;
        sessionStorage.setItem("cart", JSON.stringify(state));
      }
    },

    incrementQuantity1x: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity1x += 1;
        sessionStorage.setItem("cart", JSON.stringify(state));
      }
    },

    decrementQuantity1x: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity1x > 1) {
        product.quantity1x -= 1;
        sessionStorage.setItem("cart", JSON.stringify(state));
      }
    },

    clearCart: () => {
      sessionStorage.removeItem("cart");
      return [];
    },
  },
});

export const {
  add,
  remove,
  incrementQuantity100x,
  decrementQuantity100x,
  incrementQuantity1x,
  decrementQuantity1x,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
