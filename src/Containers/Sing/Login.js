import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../vars";
import { useDispatch } from "react-redux";
import { Loader } from "../../redux/slice/Loader";
import { userLogin } from "../../Components/Operations/operationsAuth";

import "./Sing.css";
const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHolder = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(form));
  };

  useEffect(() => {
    dispatch(Loader(false));
  }, [dispatch]);
  return (
    <div>
      <h1 className="title">Login</h1>
      <form className="login-form" onSubmit={onSubmit}>
        <input type="text" name="email" placeholder="Email" onChange={inputHolder} />
        <input type="password" name="password" placeholder="Password" onChange={inputHolder} />
        <button type="submit">Sing in</button>
        <p>
          If you do not have any account, please <NavLink to={navigation.registration}>registration</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
