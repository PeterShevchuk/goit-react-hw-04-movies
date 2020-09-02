import { HOMEMOVIE, HOMEPAGE, HOMETOTALPAGE, HOMELOADMOVIEPRIORITY, HOMELOADMOVIEPRIORITYNAME } from "../constants";

const HomePageLoadOtions = JSON.parse(localStorage.getItem("HomeLoadMovie"));
const initialState = {
  movies: [],
  page: 1,
  totalPages: 0,
  HomeValue: HomePageLoadOtions ? HomePageLoadOtions.HomeValue : 0,
  HomeLoad: HomePageLoadOtions ? HomePageLoadOtions.HomeLoad : "popular",
};

const FavoriteMovie = (state = initialState, actions) => {
  //   console.log(initialState);
  switch (actions.type) {
    case HOMEMOVIE:
      state.movies = actions.payload;
      break;
    case HOMEPAGE:
      state.page = actions.payload;
      break;
    case HOMETOTALPAGE:
      state.totalPages = actions.payload;

      break;
    case HOMELOADMOVIEPRIORITY:
      state.HomeValue = actions.payload;

      break;
    case HOMELOADMOVIEPRIORITYNAME:
      state.HomeLoad = actions.payload;

      break;
    default:
  }

  return { ...state };
};

export default FavoriteMovie;
