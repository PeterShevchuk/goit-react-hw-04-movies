import { FAVORITEMOVIESADD, FAVORITEMOVIESREMOVE } from "../constants";

export const addFavorite = (value) => ({
  type: FAVORITEMOVIESADD,
  payload: value,
});

export const removeFavorite = (id) => ({
  type: FAVORITEMOVIESREMOVE,
  payload: id,
});
