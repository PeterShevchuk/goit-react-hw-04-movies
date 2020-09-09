import React, { useEffect, Suspense, lazy, useState } from "react";

import { useParams, NavLink, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import { getMovie, request } from "../helpers/request";
import { imgUrl, imgNon } from "../helpers/vars";
import Storage from "../../Components/Storage/Storage";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../redux/slice/Loader";
import { detalMovie } from "../../redux/slice/MovieDetails";
import { addFavorite, removeFavorite } from "../../redux/slice/Favorite";

import "./MovieDetailsPage.css";

// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
// import Trailer from "../Trailer/Trailer";
const Cast = lazy(() => import("../Cast/Cast.js"));
const Reviews = lazy(() => import("../Reviews/Reviews.js"));
const Trailer = lazy(() => import("../Trailer/Trailer.js"));
const Recommendation = lazy(() => import("../Recommendations/Recommendations.js"));
const Similars = lazy(() => import("../Similar/Similar"));

const MovieDetailsPage = ({ match }) => {
  const { url } = match;
  const state = useSelector((state) => state);
  const [social, setSocial] = useState([]);
  const dispatch = useDispatch();

  const {
    title,
    poster_path,
    backdrop_path,
    budget,
    genres = [],
    runtime,
    revenue,
    popularity,
    tagline,
    status,
    homepage,
    original_title,
    overview,
    production_companies = [],
    production_countries = [],
    release_date,
    spoken_languages = [],
    vote_average,
    // vote_count,
    id,
  } = state.detalMovie;
  const movieId = Number(useParams().id);

  const favoriteToggle = () => {
    if (state.favoriteMovie.find((item) => item.id === movieId)) {
      dispatch(removeFavorite(movieId));
      return;
    }
    dispatch(addFavorite(0, { poster_path: poster_path, backdrop_path: backdrop_path, id: id, title: title }));
  };

  useEffect(() => {
    request("get", getMovie(movieId))
      .then((response) => dispatch(detalMovie(response)))
      .catch((error) => console.log(error));
    request("get", getMovie(movieId, "/external_ids"))
      .then((response) => setSocial(response))
      .catch((error) => console.log(error))
      .finally(() => dispatch(Loader(false)));
  }, [match.url, movieId, dispatch]);

  return (
    <>
      <div className="singleMovie">
        {title ? (
          <>
            <div className="singleMovie__container">
              <img className="singleMovie__poster" alt={title} src={poster_path ? imgUrl + poster_path : backdrop_path ? imgUrl + backdrop_path : imgNon}></img>
              <ul className="singleMovie__info">
                {title && (
                  <li className="singleMovie__item">
                    <span>Title: </span> {title}
                  </li>
                )}
                {original_title !== title && (
                  <li className="singleMovie__item">
                    <span>Original title: </span> {original_title}
                  </li>
                )}
                {overview && (
                  <li className="singleMovie__item">
                    <span>Overview: </span> {overview}
                  </li>
                )}
                {vote_average > 0 && (
                  <li className="singleMovie__item singleMovie__item--center">
                    <Rating readOnly={true} name="customized-10" defaultValue={vote_average ? vote_average : 0} max={10} precision={0.5} size="large" />
                    {/* <span>Rate: </span> {vote_average}/{vote_count} */}
                  </li>
                )}
                {budget > 0 && (
                  <li className="singleMovie__item">
                    <span>Budget: </span> {budget}$
                  </li>
                )}
                {revenue > 0 && (
                  <li className="singleMovie__item">
                    <span>revenue: </span> {revenue}$
                  </li>
                )}
                {genres.length > 0 && (
                  <li className="singleMovie__item singleMovie__item-list">
                    <span>genres: </span>
                    <ul>
                      {genres.map((item) => (
                        <li key={item.id}>{item.name}</li>
                      ))}
                    </ul>
                  </li>
                )}
                {release_date && (
                  <li className="singleMovie__item">
                    <span>Data: </span> {release_date}
                  </li>
                )}
                {runtime > 0 && (
                  <li className="singleMovie__item">
                    <span>runtime: </span> {`${Math.trunc(runtime / 60)}:${runtime % 60 < 10 ? (runtime % 60) + "0" : runtime % 60}`}
                  </li>
                )}
                {production_companies.length > 0 && (
                  <li className="singleMovie__item singleMovie__item-list">
                    <span>Production companies: </span>
                    <ul>
                      {production_companies.map((item) => (
                        <li key={item.name}>
                          {item.name} {item.origin_country && "(" + item.origin_country + ")"}
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {spoken_languages.length > 0 && (
                  <li className="singleMovie__item singleMovie__item-list">
                    <span>languages: </span>
                    <ul>
                      {spoken_languages.map((item) => (
                        <li key={item.name}>
                          {item.name} ({item.iso_639_1})
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {production_countries.length > 0 && (
                  <li className="singleMovie__item singleMovie__item-list">
                    <span>production countries: </span>{" "}
                    <ul>
                      {production_countries.map((item) => (
                        <li key={item.iso_3166_1}>
                          {item.name}({item.iso_3166_1})
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {popularity > 0 && (
                  <li className="singleMovie__item">
                    <span>Popularity: </span> {popularity}
                  </li>
                )}
                {status && (
                  <li className="singleMovie__item">
                    <span>Status: </span> {status}
                  </li>
                )}
                {tagline && (
                  <li className="singleMovie__item">
                    <span>Tag line: </span> {tagline}
                  </li>
                )}
              </ul>
            </div>
            <div className="singleMovie_btns">
              <Button variant="contained" color="primary" onClick={favoriteToggle}>
                {state.favoriteMovie.find((item) => item.id === movieId) ? "remove from" : "add to"} favorite
              </Button>
              <Button variant="contained" color="primary">
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </Button>
              <Button variant="contained" color="primary">
                <NavLink to={`${url}/recommendations`}>Recommendations</NavLink>
              </Button>
              <Button variant="contained" color="primary">
                <NavLink to={`${url}/similar`}>Similars</NavLink>
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
              {social.instagram_id && (
                <a href={`https://www.instagram.com/${social.instagram_id}/`} target="_blank">
                  <svg fill="#3f51b5" viewBox="0 0 50 50" width="60px" height="60px">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                  </svg>
                </a>
              )}
              {social.facebook_id && (
                <a href={`https://www.facebook.com/${social.facebook_id}/`} target="_blank">
                  <svg fill="#3f51b5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="60px" height="60px">
                    <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" />
                  </svg>
                </a>
              )}
              {social.twitter_id && (
                <a href={`https://twitter.com/${social.twitter_id}/`} target="_blank">
                  <svg fill="#3f51b5" viewBox="0 0 50 50" width="60px" height="60px">
                    <path d="M 40 0 L 10 0 C 4.484375 0 0 4.484375 0 10 L 0 40 C 0 45.515625 4.484375 50 10 50 L 40 50 C 45.515625 50 50 45.515625 50 40 L 50 10 C 50 4.484375 45.515625 0 40 0 Z M 34 40.238281 C 34 40.363281 33.945313 40.480469 33.855469 40.5625 C 33.738281 40.664063 31.011719 43 24.742188 43 C 17.230469 43 17 34.617188 17 33.664063 L 17 23.011719 L 13.429688 23 C 13.191406 23 13 22.816406 13 22.578125 L 13 18.808594 C 13 18.632813 13.109375 18.472656 13.273438 18.40625 C 13.34375 18.382813 20.058594 15.773438 20.058594 9.429688 C 20.058594 9.191406 20.253906 9 20.492188 9 L 24.578125 9 C 24.816406 9 25.007813 9.191406 25.007813 9.429688 L 25 17 L 31.5625 17 C 31.800781 17 31.992188 17.207031 31.992188 17.445313 L 31.992188 22.554688 C 31.992188 22.789063 31.800781 23 31.5625 23 L 25 23 C 25 23 25 33.253906 25 33.503906 C 25 33.75 25.226563 36.765625 28.433594 36.765625 C 31.089844 36.765625 33.320313 35.398438 33.34375 35.382813 C 33.476563 35.296875 33.640625 35.292969 33.777344 35.371094 C 33.914063 35.445313 34 35.589844 34 35.746094 Z" />
                  </svg>
                </a>
              )}
            </div>
          </>
        ) : (
          <h1 className="errorMessage">
            404
            <br />
            Information not found
          </h1>
        )}
        <Suspense fallback={<p>Compaling...</p>}>
          <Switch>
            <Route path={`${url}/reviews`} render={(props) => <Reviews {...props} id={id} />} />
            <Route path={`${url}/cast`} render={(props) => <Cast {...props} id={id} />} />
            <Route path={`${url}/trailer`} render={(props) => <Trailer {...props} movieId={id} />} />
            <Route path={`${url}/recommendations`} render={(props) => <Recommendation {...props} movieId={id} />} />
            <Route path={`${url}/similar`} render={(props) => <Similars {...props} movieId={id} />} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Storage(MovieDetailsPage);

MovieDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};
