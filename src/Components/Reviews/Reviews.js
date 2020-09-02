import React, { useEffect, useState } from "react";

import { getMovie, request } from "../helpers/request";

// redux
import { useDispatch } from "react-redux";
import Loader from "../../redux/actions/loaderActions";

import "./Reviews.css";

const Reviews = ({ movieId, match }) => {
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Loader(true));
    const parse = match.url.split("/");
    request("get", getMovie(movieId ? movieId : parse[2], "/reviews"))
      .then((data) => setReviews(data.results))
      .catch((error) => console.log(error))
      .finally(() => dispatch(Loader(false)));
  }, [movieId, match.url, dispatch]);
  return (
    <>
      <h2>{reviews.length ? "Reviews" : "No Reviews"}</h2>
      <ul className="reviews">
        {reviews &&
          reviews.map((item) => (
            <li className="reviews__item" key={item.id}>
              <p className="reviews__author">{item.author}</p>
              <br />
              <p>{item.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
