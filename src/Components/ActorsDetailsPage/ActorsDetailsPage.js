import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { getActors, request } from "../helpers/request";
import { imgUrlOriginal, imgNon } from "../helpers/vars";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";

// redux
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../redux/actions/loaderActions";
import DetalActors from "../../redux/actions/ActorsActions";

import "./ActorsDetailsPage.css";

const ActorDetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const { person, job, media_type, media, department } = useSelector((state) => state.detalActors);

  const actorID = String(useParams().id);
  const history = useHistory();
  const redirectToActorsPage = () => {
    history.push(`/movies/${actorID}`);
  };
  useEffect(() => {
    request("get", getActors(actorID))
      .then((response) => dispatch(DetalActors(response)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(Loader(false)));
  }, [match.url, actorID, dispatch]);
  return (
    <>
      {person && (
        <div className="singleActors">
          <div className="singleActors__container">
            <img className="singleActors__poster" alt={person.name} src={person.profile_path ? imgUrlOriginal + person.profile_path : imgNon}></img>
            <ul className="singleActors__info">
              {person.name && (
                <li className="singleActors__item">
                  <span>Name: </span> {person.name}
                </li>
              )}
              {job && (
                <li className="singleActors__item">
                  <span>job: </span> {job}
                </li>
              )}
              {department && (
                <li className="singleActors__item">
                  <span>departmen: </span> {department}
                </li>
              )}
              {person.popularity && (
                <li className="singleActors__item">
                  <span>popularity: </span> {person.popularity}
                </li>
              )}
              {media_type && (
                <li className="singleActors__item">
                  <span>Type Movie: </span> {media_type} {person.adult && "(+18)"}
                </li>
              )}
            </ul>
          </div>
          {media && (
            <div>
              <h2>Media</h2>
              <div className="actor__media">
                <div className="actor__media-img">
                  <img src={imgUrlOriginal + media.poster_path} alt={media.name} width="300" />
                </div>
                <div>
                  <ul className="singleActors__info">
                    {media.title && (
                      <li className="singleActors__item">
                        <span>Title: </span> {media.title} {media.adult && "(+18)"}
                      </li>
                    )}
                    {media.release_date && (
                      <li className="singleActors__item">
                        <span>release date: </span> {media.release_date}
                      </li>
                    )}
                    {media.overview && (
                      <li className="singleActors__item">
                        <span>Overview: </span> {media.overview}
                      </li>
                    )}
                    {media.popularity > 0 && (
                      <li className="singleActors__item">
                        <span>Popularity: </span> {media.popularity}
                      </li>
                    )}
                    {media.character && (
                      <li className="singleActors__item">
                        <span>character: </span> {media.character}
                      </li>
                    )}
                    {media.tagline && (
                      <li className="singleActors__item">
                        <span>Tag line: </span> {media.tagline}
                      </li>
                    )}
                  </ul>
                  <div className="singleActors__info-seeMore">
                    <Button variant="contained" color="primary" onClick={() => redirectToActorsPage()}>
                      See more info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {person.known_for && (
            <div>
              <h2>Actor films</h2>
              <ul className="actor__films">
                {person.known_for.map((item) => (
                  <MoviesItem key={item.id} {...item} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ActorDetailsPage;

ActorDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};
