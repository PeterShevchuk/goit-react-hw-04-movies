import React, { useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";
import Loader from "../../redux/actions/loaderActions";

import { request, getMovie } from "../helpers/request";

const Trailer = ({ movieId, match }) => {
  const [trailer, setTrailer] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Loader(true));
    const parse = match.url.split("/");
    request("get", getMovie(movieId ? movieId : parse[2], "/videos"))
      .then((response) => {
        setTrailer(response.results);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(Loader(false)));
  }, [movieId, match.url, dispatch]);
  return (
    <>
      <h2>{trailer.length ? "Trailers" : "No Trailers"}</h2>
      {trailer && trailer.map((item) => item.site === "YouTube" && <iframe key={item.id} title={item.name} width="1024px" height="500" src={`https://www.youtube.com/embed/${item.key}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
    </>
  );
};

export default Trailer;
