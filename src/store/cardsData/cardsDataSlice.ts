import { createSlice } from "@reduxjs/toolkit";

interface card {
  title: string;
  country: string;
  image: string;
  description: string;
}

const initialState: card[] = [
  { title: "", country: "", image: "", description: "" },
];

export const cardsDataSlice = createSlice({
  name: "cardsData",
  initialState: { value: initialState },
  reducers: {
    setCardsData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCardsData } = cardsDataSlice.actions;

export default cardsDataSlice.reducer;
