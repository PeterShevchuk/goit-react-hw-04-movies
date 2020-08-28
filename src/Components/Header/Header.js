import React from "react";

import { AppBar, Toolbar, Button } from "@material-ui/core";

import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">
          <NavLink to="/" className="link" exact>
            Home
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/movies" className="link">
            Search movies
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/movies/favorite" className="link">
            Favorite movies
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
