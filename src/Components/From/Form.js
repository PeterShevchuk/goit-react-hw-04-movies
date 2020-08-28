import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./Form.css";

const Form = ({ inputHeandler, resetForm, search, updateMovies, page }) => {
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (e) => {
    e.preventDefault();
    resetForm();
    updateMovies();

    history.push({ ...location, search: `?search=${search}&page=${page}` });
    // history.push(`/users?name=${search}`);
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input type="text" name="search" value={search} placeholder="Search movies..." onChange={inputHeandler} />
    </form>
  );
};

export default Form;
