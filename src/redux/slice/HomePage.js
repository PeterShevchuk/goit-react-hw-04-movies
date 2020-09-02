import { createSlice } from "@reduxjs/toolkit";

import { HOMEPAGESTORAGE } from "../../Components/helpers/vars";

const HomePageLoadOtions = JSON.parse(localStorage.getItem(HOMEPAGESTORAGE));
const HomePage = createSlice({
  name: "homePage",
  initialState: {
    movies: [],
    page: 1,
    totalPages: 0,
    HomeLoad: HomePageLoadOtions ? HomePageLoadOtions.HomeLoad : 0,
  },
  reducers: {
    handleChange: (state, { payload }) => ({ ...state, page: Number(payload) }),
    setMovie: (state, { payload }) => ({ ...state, movies: payload.results, totalPages: payload.total_pages }),
    handleChangeTabs: (state, { payload }) => {
      localStorage.setItem(HOMEPAGESTORAGE, JSON.stringify({ HomeLoad: payload }));
      return { ...state, HomeLoad: payload };
    },
  },
});

export const { handleChange, setMovie, handleChangeTabs } = HomePage.actions;
export default HomePage.reducer;
