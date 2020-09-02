import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, Button, FormControlLabel, Switch, Tooltip } from "@material-ui/core";

import { NavLink } from "react-router-dom";

import { LOADIMAGEOPTIONS } from "../../Components/helpers/vars";

import "./Header.css";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const loadImageOptions = localStorage.getItem(LOADIMAGEOPTIONS);
  const onChange = () => {
    setChecked(!checked);
    localStorage.setItem(LOADIMAGEOPTIONS, !checked);
  };
  useEffect(() => {
    setChecked(loadImageOptions ? JSON.parse(loadImageOptions) : false);
  }, [loadImageOptions]);
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
        <Tooltip title="Upload original or thumbnail images?" aria-label="Upload original or thumbnail images?">
          <FormControlLabel control={<Switch checked={checked} onChange={onChange} />} />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
