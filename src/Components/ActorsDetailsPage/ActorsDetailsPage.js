import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
// import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

import { getActors, request } from "../helpers/request";
import { imgUrlOriginal, imgNon } from "../helpers/vars";
import Storage from "../../Components/Storage/Storage";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";

import "./ActorsDetailsPage.css";

// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
// import Trailer from "../Trailer/Trailer";
// const Cast = lazy(() => import("../Cast/Cast.js"));
// const Reviews = lazy(() => import("../Reviews/Reviews.js"));
// const Trailer = lazy(() => import("../Trailer/Trailer.js"));

const MovieDetailsPage = ({ match, loaderToggle, saveToStorage, getFromStorage }) => {
  //   const { url } = match;

  const [movie, setMovie] = useState([]);
  //   const [favorite, setFavorite] = useState(false);

  const { person, job, media_type, media, department } = movie;
  const movieId = String(useParams().id);

  const history = useHistory();
  const redirectToActorsPage = (id) => {
    history.push(`/movies/${id}`);
  };
  useEffect(() => {
    loaderToggle(true);
    request("get", getActors(movieId))
      .then((response) => setMovie(response))
      .catch((error) => console.log(error))
      .finally(() => loaderToggle(false));
  }, [loaderToggle, match.url, movieId, getFromStorage]);
  return (
    <>
      {person && (
        <div className="singleActors">
          <div className="singleActors__container">
            <img className="singleActors__poster" alt={person.name} src={person.profile_path ? imgUrlOriginal + person.profile_path : imgNon}></img>
            <ul className="singleActors__info">
              {/* {console.log(name)} */}
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

              {/* <li className="singleActors__item">
              <Button variant="contained" color="primary" onClick={favoriteToggle}>
                {favorite ? "remove from" : "add to"} favorite
              </Button>
              <Button variant="contained" color="primary">
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </Button>
              <Button variant="contained" color="primary">
                <NavLink to={`${url}/cast`}>Actors</NavLink>
              </Button>
              <Button variant="contained" color="primary">
                <NavLink to={`${url}/trailer`}>trailer</NavLink>
              </Button>
              <Button variant="contained" color="primary" href={homepage} target="_blank" disabled={homepage ? false : true}>
                homepage
              </Button>
            </li> */}
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
                    <Button variant="contained" color="primary" onClick={() => redirectToActorsPage(media.id)}>
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

export default Storage(MovieDetailsPage);

MovieDetailsPage.propTypes = {
  loaderToggle: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
