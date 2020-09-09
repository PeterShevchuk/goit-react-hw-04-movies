import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// redux
import { useDispatch } from "react-redux";
import { Loader } from "../../redux/slice/Loader";

import { request, getMovie } from "../helpers/request";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";

const Similars = ({ movieId, match }) => {
  const [similar, setSimilar] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Loader(true));
    const parse = match.url.split("/");
    request("get", getMovie(movieId ? movieId : parse[2], "/similar"))
      .then((response) => {
        setSimilar(response.results);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(Loader(false)));
  }, [movieId, match.url, dispatch]);
  return (
    <>
      <h2>{!similar.length && "No"} Similars</h2>
      <ul className="movies__list">{similar && similar.map((item) => <MoviesItem key={item.id} {...item} />)}</ul>
    </>
  );
};

export default Similars;

Similars.propTypes = {
  movieId: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
};
