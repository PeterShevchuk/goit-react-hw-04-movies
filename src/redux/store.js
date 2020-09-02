import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// rootReducer
import loader from "./slice/Loader";
import detalActors from "./slice/ActorDetails";
import detalMovie from "./slice/MovieDetails";
import favoriteMovie from "./slice/Favorite";
import homePage from "./slice/HomePage";
import moviePage from "./slice/MoviePage";

const store = configureStore({
  reducer: combineReducers({
    loader,
    detalActors,
    detalMovie,
    favoriteMovie,
    homePage,
    moviePage,
  }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
