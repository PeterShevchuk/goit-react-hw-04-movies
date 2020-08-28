import React, { useEffect, useState } from "react";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";
import Storage from "../../Components/Storage/Storage";

import "./Favorite.css";

const Favorite = ({ loaderToggle, saveToStorage, getFromStorage }) => {
  let getFavorite = getFromStorage("FavoriteMovie");
  if (!getFavorite) {
    getFavorite = [];
    saveToStorage("FavoriteMovie", getFavorite);
  }
  const [favorite, setFavorite] = useState(getFavorite);

  useEffect(() => {
    loaderToggle(true);
    loaderToggle(false);
  }, [loaderToggle]);

  const removeFavorite = (id) => {
    saveToStorage("FavoriteMovie", [...favorite.filter((item) => item.id !== id)]);
    setFavorite([...favorite.filter((item) => item.id !== id)]);
  };

  return (
    <ul className="movies__list">
      {!favorite.length > 0 && (
        <li>
          <h1>No movies in favorite</h1>
        </li>
      )}
      {favorite.length > 0 && favorite.map((item) => <MoviesItem key={item.id} {...item} removeFavorite={removeFavorite} />)}
    </ul>
  );
};

export default Storage(Favorite);
