import { combineReducers } from "redux";
import Loader from "./loaderReducer";
import DetalActors from "./ActorsReducer";
import DetalMovie from "./MovieReducer";
import FavoriteMovie from "./FavoriteMovieReducer";
import HomePage from "./HomePageReducer";

const rootReducer = combineReducers({
  loader: Loader,
  detalActors: DetalActors,
  detalMovie: DetalMovie,
  favoriteMovie: FavoriteMovie,
  homePage: HomePage,
});

export default rootReducer;
