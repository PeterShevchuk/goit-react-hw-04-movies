import { createSlice } from "@reduxjs/toolkit";

import { SITEOPTIONS } from "../../Components/helpers/vars";

const SiteOptionsStorage = JSON.parse(localStorage.getItem(SITEOPTIONS));
const saveToStorage = (newObj) => {
  localStorage.setItem(SITEOPTIONS, JSON.stringify(newObj));
  return newObj;
};
const initialState = {
  LoadImage: SiteOptionsStorage ? SiteOptionsStorage.LoadImage : 0,
  HomeLoad: SiteOptionsStorage ? SiteOptionsStorage.HomeLoad : 0,
  Token: SiteOptionsStorage ? SiteOptionsStorage.Token : null,
  Name: SiteOptionsStorage ? SiteOptionsStorage.Name : "",
};

if (!SiteOptionsStorage) {
  saveToStorage(initialState);
}

const SiteOptions = createSlice({
  name: "Options",
  initialState: initialState,
  reducers: {
    changeOptions: (state, { payload }) => saveToStorage({ ...state, ...payload }),
  },
});

export const { changeOptions } = SiteOptions.actions;
export default SiteOptions.reducer;
