import { createSlice } from "@reduxjs/toolkit";

const HomePage = createSlice({
  name: "homePage",
  initialState: {
    movies: [],
    page: 1,
    totalPages: 0,
  },
  reducers: {
    handleChange: (state, { payload }) => ({ ...state, page: Number(payload) }),
    setMovie: (state, { payload }) => ({ ...state, movies: payload.results, totalPages: payload.total_pages }),
  },
});

export const { handleChange, setMovie, handleChangeTabs } = HomePage.actions;
export default HomePage.reducer;
