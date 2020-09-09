import { createSlice } from "@reduxjs/toolkit";

const favoriteMovie = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorite: (state, { payload }) => [payload, ...state],
    removeFavorite: (state, { payload }) => [...state.filter((item) => item.id !== payload)],
  },
});

export const { addFavorite, removeFavorite } = favoriteMovie.actions;
export default favoriteMovie.reducer;
