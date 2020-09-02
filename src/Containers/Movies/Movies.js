import React, { Component } from "react";
import queryString from "query-string";
import Pagination from "@material-ui/lab/Pagination";

// import PropTypes from "prop-types";
// import { useHistory, useLocation } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { Loader } from "../../redux/slice/Loader";
import Form from "../../Components/From/Form";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";
import { getSearch, request } from "../../Components/helpers/request";
import { handleChange, setMovie, resetForm, inputHeandler } from "../../redux/slice/MoviePage";

import "./Movies.css";

class Movies extends Component {
  componentDidMount = async () => {
    await this.props.Loader(true);
    const parse = queryString.parse(this.props.location.search);
    if (parse.search) {
      await this.props.handleChange(Number(parse.page));
      await this.props.inputHeandler(parse.search);
      await this.updateMovies();
    }
    this.props.Loader(false);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.page === prevProps.page) {
      return;
    }
    this.updateMovies();
  };

  updateMovies = async () => {
    await this.props.Loader(true);
    await request("get", getSearch(this.props.search, this.props.page))
      .then((response) => {
        this.props.setMovie(response);
      })
      .catch((error) => console.log(error));
    this.props.Loader(false);
  };

  render() {
    const { movies, totalPages, page, handleChange } = this.props;
    return (
      <div>
        <Form updateMovies={this.updateMovies} />
        <ul className="movies__list">
          {movies.map((item) => (
            <MoviesItem key={item.id} {...item} />
          ))}
        </ul>
        {totalPages > 0 && <Pagination color="primary" count={totalPages} page={page} onChange={(event, value) => handleChange(value)} />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movies: state.moviePage.movies,
  page: state.moviePage.page,
  search: state.moviePage.search,
  totalPages: state.moviePage.totalPages,
});

const mapDispatchToProps = {
  setMovie,
  handleChange,
  Loader,
  resetForm,
  inputHeandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

// Movies.propTypes = {
//   history: PropTypes.object.isRequired,
//   loaderToggle: PropTypes.func.isRequired,
//   location: PropTypes.object.isRequired,
//   match: PropTypes.object.isRequired,
//   staticContext: PropTypes.bool,
// };
