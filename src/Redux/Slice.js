import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: [],
  reducers: {
    add(state, action) {
      // Your logic to add data here
    },
    removeData(state, action) {
      // Your logic to remove data here
    },
    updateData(state, action) {
      // Your logic to update data here
    },
  },
});

export const { add, removeData, updateData } = appSlice.actions;
export const appReducer = appSlice.reducer;
