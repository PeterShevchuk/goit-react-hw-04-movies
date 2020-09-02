import { createSlice } from "@reduxjs/toolkit";
import { MOVIEFAVORITESTORAGE } from "../../Components/helpers/vars";

// const initialState = JSON.parse(localStorage.getItem(MOVIEFAVORITESTORAGE));

// const saveToStorage = (newObj) => {
//   console.log(newObj);
//   localStorage.setItem(MOVIEFAVORITESTORAGE, JSON.stringify(newObj));
//   return newObj;
// };

const favoriteMovie = createSlice({
  name: "favorite",
  initialState: initialState ? initialState : [],
  reducers: {
    addFavorite: (state, { payload }) => saveToStorage([payload, ...state]),
    removeFavorite: (state, { payload }) => saveToStorage([...state.filter((item) => item.id !== payload)]),
  },
});

export const { addFavorite, removeFavorite } = favoriteMovie.actions;
export default favoriteMovie.reducer;
