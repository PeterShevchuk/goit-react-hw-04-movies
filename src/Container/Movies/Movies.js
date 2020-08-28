import React, { Component } from "react";
import queryString from "query-string";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";

// import { useHistory, useLocation } from "react-router-dom";

import Form from "../../Components/From/Form";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";
import { getSearch, request } from "../../Components/helpers/request";

import "./Movies.css";

const defState = {
  movies: [],
  search: "",
  page: 1,
  totalResults: 0,
  totalPages: 0,
};

class Movies extends Component {
  state = defState;

  componentDidMount = async () => {
    this.props.loaderToggle(true);
    const parse = queryString.parse(this.props.location.search);
    if (parse.search) {
      this.setState({ search: parse.search, page: Number(parse.page) });
      this.updateMovies(parse.search, Number(parse.page));
    }
    this.props.loaderToggle(false);
  };
  componentDidUpdate = async (prevProps, prevState) => {
    const { location, history } = this.props;
    const { page, search } = this.state;
    if (page === prevState.page) {
      return;
    }
    this.updateMovies(search, page);
    history.push({ ...location, search: `?search=${search}&page=${page}` });
  };
  inputHeandler = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };
  handleChange = (event, value) => {
    this.setState({
      page: value,
    });
  };
  resetForm = () => {
    this.setState({
      // search: "",
      page: 1,
    });
  };
  updateMovies = (params) => {
    this.props.loaderToggle(true);
    request("get", getSearch(params ? params : this.state.search, this.state.page))
      .then((response) => {
        this.setState({ movies: response.results, totalResults: response.total_results, totalPages: response.total_pages });
      })
      .catch((error) => console.log(error))
      .finally(() => this.props.loaderToggle(false));
  };

  render() {
    const { search, movies, totalPages, page } = this.state;
    return (
      <div>
        <Form inputHeandler={this.inputHeandler} updateMovies={this.updateMovies} search={search} resetForm={this.resetForm} page={this.state.page} />
        <ul className="movies__list">
          {movies.map((item) => (
            <MoviesItem key={item.id} {...item} />
          ))}
        </ul>
        {totalPages > 0 && <Pagination color="primary" count={totalPages} page={page} onChange={this.handleChange} />}
      </div>
    );
  }
}

export default Movies;

Movies.propTypes = {
  history: PropTypes.object.isRequired,
  loaderToggle: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  staticContext: PropTypes.bool,
};
