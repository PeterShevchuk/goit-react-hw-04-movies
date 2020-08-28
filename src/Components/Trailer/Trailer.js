import React, { useEffect, useState } from "react";

import { request, getSearch } from "../helpers/request";

const Trailer = ({ movieId, match, loaderToggle }) => {
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    loaderToggle(true);
    const parse = match.url.split("/");
    request("get", getSearch(movieId ? movieId : parse[2], "/videos"))
      .then((response) => setTrailer(response.results))
      .catch((error) => console.log(error))
      .finally(() => loaderToggle(false));
  }, [movieId, match.url, loaderToggle]);
  return (
    <>
      <h2>{trailer.length ? "Trailers" : "No Trailers"}</h2>
      {trailer && trailer.map((item) => item.site === "YouTube" && <iframe key={item.id} title={item.name} width="1024px" height="500" src={`https://www.youtube.com/embed/${item.key}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
    </>
  );
};

export default Trailer;
