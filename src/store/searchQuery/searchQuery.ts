import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: { value: initialState },
  reducers: {
    setSearchQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
