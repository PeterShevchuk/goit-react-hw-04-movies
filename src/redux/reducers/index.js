import { combineReducers } from "redux";
import loader from "../slice/Loader";
import detalActors from "./ActorsReducer";
import detalMovie from "./MovieReducer";
import favoriteMovie from "./FavoriteMovieReducer";
import homePage from "../slice/HomePage";
import moviePage from "../slice/MoviePage";

const rootReducer = combineReducers({
  loader,
  detalActors,
  detalMovie,
  favoriteMovie,
  homePage,
  moviePage,
});

export default rootReducer;
