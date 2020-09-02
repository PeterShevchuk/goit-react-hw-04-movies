import React, { Component } from "react";
// import PropTypes from "prop-types";

import Pagination from "@material-ui/lab/Pagination";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// redux
import { connect } from "react-redux";
import { Loader } from "../../redux/slice/Loader";
import { getHomeMovie, request } from "../../Components/helpers/request";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";
import { handleChange, setMovie, handleChangeTabs } from "../../redux/slice/HomePage";

import "./Home.css";

class Home extends Component {
  updateMovies = async () => {
    await this.props.Loader(true);
    await request("get", getHomeMovie(this.props.page, this.props.HomeLoad)).then((result) => this.props.setMovie(result));
    this.props.Loader(false);
  };
  componentDidMount = () => {
    this.updateMovies();
  };
  componentDidUpdate = async (prevProps, prevState) => {
    const { page } = this.props;
    if (page === prevProps.page) {
      return;
    }

    this.updateMovies();
  };
  handleChangeTabs = async (event, homeLoad) => {
    if (homeLoad === this.props.HomeLoad) {
      return;
    }
    await this.props.handleChange(1);
    await this.props.handleChangeTabs(homeLoad);
    this.updateMovies();
  };

  render() {
    const { movies, totalPages, HomeLoad, page, handleChange } = this.props;
    return (
      <>
        <Paper square>
          <Tabs value={HomeLoad} indicatorColor="primary" textColor="primary" onChange={this.handleChangeTabs} aria-label="disabled tabs example" centered>
            <Tab label="Popular" />
            <Tab label="Top" />
            <Tab label="upcoming" />
            <Tab label="Now playing" />
          </Tabs>
        </Paper>
        <ul className="movies__list">
          {movies.map((item) => (
            <MoviesItem key={item.id} {...item} />
          ))}
        </ul>
        {<Pagination color="primary" count={totalPages} page={page} onChange={(event, value) => handleChange(value)} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.homePage.movies,
  page: state.homePage.page,
  totalPages: state.homePage.totalPages,
  HomeValue: state.homePage.HomeValue,
  HomeLoad: state.homePage.HomeLoad,
});

const mapDispatchToProps = {
  setMovie,
  handleChange,
  Loader,
  handleChangeTabs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// Home.propTypes = {
//   history: PropTypes.object.isRequired,
//   loaderToggle: PropTypes.func.isRequired,
//   location: PropTypes.object.isRequired,
//   match: PropTypes.object.isRequired,
//   staticContext: PropTypes.bool,
// };
