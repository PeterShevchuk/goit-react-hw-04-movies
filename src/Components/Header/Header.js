import React from "react";

import { AppBar, Toolbar, Button } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginOut, getUserInfo } from "../../Components/Operations/operationsAuth";

import { navigation } from "../../vars";

import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  // const LoadImage = useSelector((state) => state.options.LoadImage);
  const options = useSelector((state) => state.options);
  // const onChange = (props) => {
  //   dispatch(changeOptions({ LoadImage: props.target.checked ? 1 : 0 }));
  // };
  return (
    <AppBar position="static">
      <Toolbar className="header-nav">
        <Button color="inherit">
          <NavLink to={navigation.home} className="link" exact>
            Home
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to={navigation.movies} className="link">
            Search movies
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to={navigation.moviesFavorite} className="link">
            Favorite movies
          </NavLink>
        </Button>

        {!options.Token ? (
          <>
            <Button color="inherit">
              <NavLink to={navigation.login} className="link">
                Login
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to={navigation.registration} className="link">
                Registration
              </NavLink>
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => dispatch(getUserInfo(options.Token))}>
              {options.Name}
            </Button>
            <Button color="inherit" onClick={() => dispatch(userLoginOut(options.Token))}>
              Login out
            </Button>
          </>
        )}
        {/* <Tooltip title="Upload original or thumbnail images? Will start working after reloading the page" aria-label="Upload original or thumbnail images?">
          <FormControlLabel control={<Switch checked={LoadImage === 1 ? true : false} onChange={onChange} />} />
        </Tooltip> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
