import React from "react";
import { useHistory } from "react-router-dom";

import { imgUrl, imgNon } from "../helpers/vars";
import removeIcon from "../../img/remove.png";
import "./MoviesItem.css";

const MoviesItem = ({ poster_path, backdrop_path, id, title, removeFavorite, adult }) => {
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
      {removeFavorite && <img className="movies__favorite-remove" alt={id} src={removeIcon} onClick={() => removeFavorite(id)} />}
    </li>
  );
};

export default MoviesItem;
