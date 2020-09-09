import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../vars";
import { useDispatch } from "react-redux";
import { Loader } from "../../redux/slice/Loader";
import { createNewUser } from "../../Components/Operations/operationsAuth";
import "./Sing.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const inputHolder = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewUser(form));
  };

  useEffect(() => {
    dispatch(Loader(false));
  }, [dispatch]);
  return (
    <div>
      <h1 className="title">Registration</h1>
      <form className="registration-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={inputHolder} />
        <input type="email" name="email" placeholder="Email" onChange={inputHolder} />
        <input type="password" name="password" placeholder="Password" onChange={inputHolder} />
        <button type="submit">Sing up</button>
        <p>
          If you already have an account please <NavLink to={navigation.login}>login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Registration;
