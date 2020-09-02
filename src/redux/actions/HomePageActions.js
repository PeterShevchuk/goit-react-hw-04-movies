import { HOMEMOVIE, HOMEPAGE, HOMETOTALPAGE, HOMELOADMOVIEPRIORITY, HOMELOADMOVIEPRIORITYNAME } from "../constants";

export const handleChange = (event, value) => ({
  type: HOMEPAGE,
  payload: value,
});

// export const removeFavorite = (id) => ({
//   type: FAVORITEMOVIESREMOVE,
//   payload: id,
// });
