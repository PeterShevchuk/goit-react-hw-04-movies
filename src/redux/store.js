import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// rootReducer
import loader from "./slice/Loader";
import detalActors from "./slice/ActorDetails";
import detalMovie from "./slice/MovieDetails";
import favoriteMovie from "./slice/Favorite";
import homePage from "./slice/HomePage";
import moviePage from "./slice/MoviePage";
import options from "./slice/Options";
import userInfo from "../redux/slice/UserInfo";

const persistConfig = {
  key: "reducer",
  storage,
  blacklist: ["loader", "detalActors", "detalMovie"],
  // whitelist: ["reducer"],
};

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      loader,
      detalActors,
      detalMovie,
      favoriteMovie,
      homePage,
      moviePage,
      options,
      userInfo,
    })
  ),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
