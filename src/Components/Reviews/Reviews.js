import React, { useEffect, useState } from "react";

import { getMovie, request } from "../helpers/request";

import "./Reviews.css";

const Reviews = ({ movieId, match, loaderToggle }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loaderToggle(true);
    const parse = match.url.split("/");
    request("get", getMovie(movieId ? movieId : parse[2], "/reviews"))
      .then((data) => setReviews(data.results))
      .catch((error) => console.log(error))
      .finally(() => loaderToggle(false));
  }, [movieId, match.url, loaderToggle]);
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
