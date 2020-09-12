// Options
export const SITEOPTIONS = "SiteOptions";

// Header
const img = ["w500", "original"];

https: export const imgUrl = `https://image.tmdb.org/t/p/${img[localStorage.getItem(SITEOPTIONS) ? JSON.parse(localStorage.getItem(SITEOPTIONS)).LoadImage : 0]}`;
export const imgNon = "https://cdn.shopify.com/s/files/1/1841/2299/products/032_RGB_grande.jpg?v=1589096608";

// request
export const API_KEY = process.env.REACT_APP_API_KEY;
export const URL = "https://api.themoviedb.org/3";
export const LANG = "&language=en-US";
export const region = "&region=ua";
export const year = "&primary_release_year=2020";
export const adult = "&include_adult=false";

// Home page
export const HOMELOADPAGE = ["popular", "top_rated", "upcoming", "now_playing"];
export const HOMEPAGESTORAGE = "HomeLoadOptions";

// Movie page
export const MOVIEFAVORITESTORAGE = "FavoriteMovie";

// Auth
export const USERTOKEN = "userToken";
export const USERINFO = "userInfo";
