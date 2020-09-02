import React from "react";
import { useHistory } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/slice/Favorite";

import { imgUrl, imgNon } from "../helpers/vars";
import removeIcon from "../../img/remove.png";
import "./MoviesItem.css";

const MoviesItem = ({ poster_path, backdrop_path, id, title, adult }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToMoviePage = () => {
    history.push(`/movies/${id}`);
  };
  return (
    <li className="movies__item">
      <img onClick={redirectToMoviePage} className="movies__img" src={poster_path ? imgUrl + poster_path : backdrop_path ? imgUrl + backdrop_path : imgNon} alt={title}></img>
      <p className="movies__title">
        {adult && "(18+)"} {title}{" "}
      </p>
      {history.location.pathname === "/movies/favorite" && <img className="movies__favorite-remove" alt={id} src={removeIcon} onClick={() => dispatch(removeFavorite(id))} />}
    </li>
  );
};

export default MoviesItem;
