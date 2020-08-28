import axios from "axios";

import { API_KEY, URL, LANG, region, year, adult } from "./vars";

export const getHomeMovie = (page, homeLoad) => {
  return `${URL}/movie/${homeLoad}?api_key=${API_KEY}${region}&page=${page}${year}`;
};

export const getSearch = (search, page = 1) => {
  return `${URL}/search/movie?api_key=${API_KEY}${LANG}&query=${search}&page=${page}${adult}`;
};

export const getMovie = (id, type = "") => {
  return `${URL}/movie/${id}${type}?api_key=${API_KEY}`;
};
export const getActors = (id) => {
  return `${URL}/credit/${id}?api_key=${API_KEY}`;
};
export const request = async (method, url, body = null) => {
  const result = await axios[method](url, body);
  return result.data;
};
