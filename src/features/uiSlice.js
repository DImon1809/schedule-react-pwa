import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  highlightNumetator: false,
  highlightDenominator: false,
  highlightLaboratory: false,
  highlightTeacher: "",
};

export const uiSlice = createSlice({
  name: "uIhighlight",
  initialState,
  reducers: {
    setHighlightNumerator: (state, action) => {
      state.highlightNumetator = action.payload;
    },

    setHighlightDenominator: (state, action) => {
      state.highlightDenominator = action.payload;
    },

    setHighlightLaboratory: (state, action) => {
      state.highlightLaboratory = action.payload;
    },

    setHighlightTeacher: (state, action) => {
      state.highlightTeacher = action.payload;
    },
  },
});

export const {
  setHighlightNumerator,
  setHighlightDenominator,
  setHighlightLaboratory,
  setHighlightTeacher,
} = uiSlice.actions;
export default uiSlice.reducer;
