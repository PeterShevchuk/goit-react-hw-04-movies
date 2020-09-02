import { createSlice } from "@reduxjs/toolkit";

const MoviePage = createSlice({
  name: "moviePage",
  initialState: {
    movies: [],
    search: "",
    page: 1,
    totalPages: 0,
  },
  reducers: {
    handleChange: (state, { payload }) => ({ ...state, page: Number(payload) }),
    setMovie: (state, { payload }) => ({ ...state, movies: payload.results, totalPages: payload.total_pages }),
    resetForm: (state) => ({ ...state, page: 1 }),
    inputHeandler: (state, { payload }) => ({ ...state, search: payload }),
    // inputHeandlerChange: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { handleChange, setMovie, resetForm, inputHeandler } = MoviePage.actions;
export default MoviePage.reducer;
