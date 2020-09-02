import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getMovie, request } from "../helpers/request";
import { imgUrl } from "../helpers/vars";

// redux
import { useDispatch } from "react-redux";
import Loader from "../../redux/actions/loaderActions";

import noAvatar from "../../img/noAvatar.png";

import "./Cast.css";

const Cast = ({ movieId, match }) => {
  const [cast, setCast] = useState([]);
  const dispatch = useDispatch();

  const history = useHistory();
  const redirectToActorsPage = (id) => {
    history.push(`/actors/${id}`);
  };

  useEffect(() => {
    dispatch(Loader(true));
    const parse = match.url.split("/");
    request("get", getMovie(movieId ? movieId : parse[2], "/credits"))
      .then((data) => setCast(data))
      .catch((error) => console.log(error))
      .finally(() => dispatch(Loader(false)));
  }, [movieId, match.url, dispatch]);

  return (
    <>
      <h2>{cast.cast && cast.cast.length ? "Actors" : "No Actors"}</h2>
      <ul className="cast">
        {cast.cast ? (
          cast.cast.map((item) => (
            <li className="cast__item" key={item.id}>
              <img className="cast__img" src={item.profile_path ? imgUrl + item.profile_path : noAvatar} alt={item.name} width="100" />
              <div className="cast__info">
                <h3 className="cast__info-name" onClick={() => redirectToActorsPage(item.credit_id)}>
                  {item.name}
                </h3>
                <h5 className="cast__info-character">"{item.character}"</h5>
              </div>
            </li>
          ))
        ) : (
          <li>No Actors</li>
        )}
      </ul>
    </>
  );
};

export default Cast;
