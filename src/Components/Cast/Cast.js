import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getMovie, request } from "../helpers/request";
import { imgUrl } from "../helpers/vars";

import noAvatar from "../../img/noAvatar.png";

import "./Cast.css";

const Cast = ({ movieId, match, loaderToggle }) => {
  const [cast, setCast] = useState([]);

  const history = useHistory();
  const redirectToActorsPage = (id) => {
    history.push(`/actors/${id}`);
  };

  useEffect(() => {
    loaderToggle(true);
    const parse = match.url.split("/");
    request("get", getMovie(movieId ? movieId : parse[2], "/credits"))
      .then((data) => setCast(data))
      .catch((error) => console.log(error))
      .finally(() => loaderToggle(false));
  }, [movieId, match.url, loaderToggle]);

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
