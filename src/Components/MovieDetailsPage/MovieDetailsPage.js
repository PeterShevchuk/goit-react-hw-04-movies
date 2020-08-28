import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams, NavLink, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

import { getMovie, request } from "../helpers/request";
import { imgUrlOriginal, imgNon } from "../helpers/vars";
import Storage from "../../Components/Storage/Storage";

import "./MovieDetailsPage.css";

// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
// import Trailer from "../Trailer/Trailer";
const Cast = lazy(() => import("../Cast/Cast.js"));
const Reviews = lazy(() => import("../Reviews/Reviews.js"));
const Trailer = lazy(() => import("../Trailer/Trailer.js"));

const MovieDetailsPage = ({ match, loaderToggle, saveToStorage, getFromStorage }) => {
  const { url } = match;

  const [movie, setMovie] = useState([]);
  const [favorite, setFavorite] = useState(false);

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
  } = movie;
  const movieId = Number(useParams().id);

  const favoriteToggle = () => {
    const getFavorite = getFromStorage("FavoriteMovie");
    if (getFavorite && getFavorite.find((item) => item.id === movieId)) {
      saveToStorage("FavoriteMovie", [...getFavorite.filter((item) => item.id !== movieId)]);
      setFavorite(false);
      return;
    }
    const newFavorite = { poster_path: poster_path, backdrop_path: backdrop_path, id: id, title: title };
    setFavorite(true);
    if (getFavorite) {
      saveToStorage("FavoriteMovie", [newFavorite, ...getFavorite]);
      return;
    }

    saveToStorage("FavoriteMovie", [newFavorite]);
  };

  useEffect(() => {
    loaderToggle(true);
    const getFavorite = getFromStorage("FavoriteMovie");
    if (getFavorite && movieId && getFavorite.find((item) => item.id === movieId)) {
      setFavorite(true);
    }
    request("get", getMovie(movieId))
      .then((response) => setMovie(response))
      .catch((error) => console.log(error))
      .finally(() => loaderToggle(false));
  }, [loaderToggle, match.url, movieId, getFromStorage]);

  return (
    <>
      <div className="singleMovie">
        {movie ? (
          <div className="singleMovie__container">
            <img className="singleMovie__poster" alt={title} src={poster_path ? imgUrlOriginal + poster_path : backdrop_path ? imgUrlOriginal + backdrop_path : imgNon}></img>
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
                  <Rating readOnly={true} name="customized-10" defaultValue={vote_average} max={10} precision={0.5} size="large" />
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

              <li className="singleMovie__item">
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
              </li>
            </ul>
          </div>
        ) : (
          <h1 className="errorMessage">
            404
            <br />
            Information not found
          </h1>
        )}
        <Suspense fallback={<p>Compaling...</p>}>
          <Switch>
            <Route path={`${url}/reviews`} render={(props) => <Reviews {...props} id={id} loaderToggle={loaderToggle} />} />
            <Route path={`${url}/cast`} render={(props) => <Cast {...props} id={id} loaderToggle={loaderToggle} />} />
            <Route path={`${url}/trailer`} render={(props) => <Trailer {...props} movieId={id} loaderToggle={loaderToggle} />} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Storage(MovieDetailsPage);

MovieDetailsPage.propTypes = {
  loaderToggle: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
