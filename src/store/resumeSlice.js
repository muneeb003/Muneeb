import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parsedData: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setParsedData: (state, action) => {
      state.parsedData = action.payload;
    },
    clearParsedData: (state) => {
      state.parsedData = null;
    },
  },
});

export const { setParsedData, clearParsedData } = resumeSlice.actions;

export default resumeSlice.reducer;
