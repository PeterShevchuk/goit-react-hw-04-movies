import React, { Component } from "react";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { getHomeMovie, request } from "../../Components/helpers/request";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";
import Storage from "../../Components/Storage/Storage";

import "./Home.css";

class Home extends Component {
  state = {
    movies: [],
    page: 1,
    // totalResults: 0,
    totalPages: 0,
    HomeValue: 1,
    HomeLoad: "popular",
  };

  updateMovies = (homeLoad) => {
    this.props.loaderToggle(true);
    request("get", getHomeMovie(this.state.page, homeLoad ? homeLoad : this.state.HomeLoad)).then((result) => this.setState({ movies: result.results, totalPages: result.total_pages }));
    this.props.loaderToggle(false);
  };
  handleChange = (event, value) => {
    this.setState({
      page: value,
    });
  };
  componentDidMount = async () => {
    const HomePageLoadOtions = this.props.getFromStorage("HomeLoadMovie");
    this.updateMovies(HomePageLoadOtions ? HomePageLoadOtions.HomeLoad : null);
    if (HomePageLoadOtions) {
      this.setState({ HomeValue: HomePageLoadOtions.HomeValue, HomeLoad: HomePageLoadOtions.HomeLoad });
    }
  };
  componentDidUpdate = async (prevProps, prevState) => {
    const { page } = this.state;
    if (page === prevState.page) {
      return;
    }

    this.updateMovies();
  };
  handleChangeTabs = async (event, newValue) => {
    const homeLoad = event.target.name ? event.target.name : event.target.parentNode.name;
    if (String(homeLoad) === String(this.state.HomeLoad)) {
      return;
    }
    await this.setState({ HomeValue: newValue, HomeLoad: homeLoad });
    this.props.saveToStorage("HomeLoadMovie", { HomeValue: newValue, HomeLoad: homeLoad });
    this.updateMovies();
  };

  render() {
    const { movies, page, totalPages, HomeValue } = this.state;
    return (
      <>
        <Paper square>
          <Tabs value={HomeValue} indicatorColor="primary" textColor="primary" onChange={this.handleChangeTabs} aria-label="disabled tabs example" centered>
            <Tab label="Popular" name="popular" />
            <Tab label="Top" name="top_rated" />
            <Tab label="upcoming" name="upcoming" />
            <Tab label="Now playing" name="now_playing" />
          </Tabs>
        </Paper>
        <ul className="movies__list">
          {movies.map((item) => (
            <MoviesItem key={item.id} {...item} />
          ))}
        </ul>
        {<Pagination color="primary" count={totalPages} page={page} onChange={this.handleChange} />}
      </>
    );
  }
}
export default Storage(Home);

Home.propTypes = {
  history: PropTypes.object.isRequired,
  loaderToggle: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  staticContext: PropTypes.bool,
};
