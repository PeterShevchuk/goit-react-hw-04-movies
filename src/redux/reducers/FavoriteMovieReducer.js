import { FAVORITEMOVIESADD, FAVORITEMOVIESREMOVE } from "../constants";

let initialState = JSON.parse(localStorage.getItem("FavoriteMovie"));

if (!initialState) {
  initialState = [];
  localStorage.setItem("FavoriteMovie", JSON.stringify([]));
}

const FavoriteMovie = (state = initialState, actions) => {
  //   console.log(initialState);
  switch (actions.type) {
    case FAVORITEMOVIESADD:
      const addFavorite = [actions.payload, ...state];
      localStorage.setItem("FavoriteMovie", JSON.stringify(addFavorite));
      return addFavorite;

    case FAVORITEMOVIESREMOVE:
      const removeFavorite = [...state.filter((item) => item.id !== actions.payload)];
      localStorage.setItem("FavoriteMovie", JSON.stringify(removeFavorite));
      return removeFavorite;

    default:
      return state;
  }
};

export default FavoriteMovie;
