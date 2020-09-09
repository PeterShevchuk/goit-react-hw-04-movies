import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// redux
import { useDispatch } from "react-redux";
import { Loader } from "../../redux/slice/Loader";

import { request, getMovie } from "../helpers/request";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";

const Recommendations = ({ movieId, match }) => {
  const [recommendation, setRecommendation] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Loader(true));
    const parse = match.url.split("/");
    request("get", getMovie(movieId ? movieId : parse[2], "/recommendations"))
      .then((response) => {
        setRecommendation(response.results);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(Loader(false)));
  }, [movieId, match.url, dispatch]);
  return (
    <>
      <h2>{!recommendation.length && "No"} Recommendations</h2>
      <ul className="movies__list">{recommendation && recommendation.map((item) => <MoviesItem key={item.id} {...item} />)}</ul>
    </>
  );
};

export default Recommendations;

Recommendations.propTypes = {
  movieId: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
};
