import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LoadImage: 0,
  HomeLoad: 0,
  Token: null,
  Name: "",
};

const SiteOptions = createSlice({
  name: "Options",
  initialState: initialState,
  reducers: {
    changeOptions: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { changeOptions } = SiteOptions.actions;
export default SiteOptions.reducer;
