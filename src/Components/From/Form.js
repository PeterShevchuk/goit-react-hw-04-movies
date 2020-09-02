import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { resetForm, inputHeandler } from "../../redux/slice/MoviePage";
import "./Form.css";

const Form = ({ updateMovies }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.moviePage);
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetForm());
    updateMovies();

    history.push({ ...location, search: `?search=${state.search}&page=${state.page}` });
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input type="text" name="search" value={state.search} placeholder="Search movies..." onChange={(e) => dispatch(inputHeandler(e.target.value))} />
    </form>
  );
};

export default Form;
