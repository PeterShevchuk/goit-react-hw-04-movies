import { createSlice } from "@reduxjs/toolkit";

const SiteOptions = createSlice({
  name: "Options",
  initialState: {
    LoadImage: 0,
    HomeLoad: 0,
    Token: null,
    Name: "",
  },
  reducers: {
    changeOptions: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { changeOptions } = SiteOptions.actions;
export default SiteOptions.reducer;
