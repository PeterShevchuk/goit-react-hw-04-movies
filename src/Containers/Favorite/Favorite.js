import React, { useEffect } from "react";

import MoviesItem from "../../Components/MoviesItem/MoviesItem";
import Storage from "../../Components/Storage/Storage";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../redux/slice/Loader";

import "./Favorite.css";

const Favorite = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favoriteMovie);
  useEffect(() => {
    dispatch(Loader(false));
  }, [dispatch]);

  return (
    <ul className="movies__list">
      {!favorite.length > 0 && (
        <li>
          <h1>No movies in favorite</h1>
        </li>
      )}
      {favorite.length > 0 && favorite.map((item) => <MoviesItem key={item.id} {...item} />)}
    </ul>
  );
};

export default Storage(Favorite);
