import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    add: (state, action) => {
      state.value += action.payload;
    },
    subtract: (state, action) => {
      state.value -= action.payload;
    },
    multiply: (state, action) => {
      state.value *= action.payload;
    },
    divide: (state, action) => {
      state.value /= action.payload;
    },
  },
});
export const { increment, decrement, add, subtract, multiply, divide } =
  counterSlice.actions;
export default counterSlice.reducer;
