import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isUpdating: true,
};

const uiStateSlice = createSlice({
  name: "Card Content List",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsUpdating(state, action) {
      state.isUpdating = action.payload;
    },
  },
});

export const uiStateActions = uiStateSlice.actions;

export default uiStateSlice.reducer;
