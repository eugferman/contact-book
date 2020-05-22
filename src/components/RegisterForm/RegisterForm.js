import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { registerAuth } from "../../services/auth";
import { addItem } from "../../services/database";

import { registerUserAction } from "../../redux/actions/registerUserAction";
import { stateWelcomeCompAction } from "../../redux/actions/stateWelcomeCompAction";

import "./RegisterForm.scss";

function RegisterForm() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegisterEmail = (event) => {
    setRegisterEmail(event.target.value);
  };
  const handleRegisterPassword = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const userToRegister = {
      id: uuidv4(),
      email: registerEmail,
      password: registerPassword,
    };

    dispatch(registerUserAction(userToRegister));
    registerAuth(registerEmail, registerPassword);
    addItem("users", userToRegister);
    dispatch(stateWelcomeCompAction(true));
  };

  return (
    <div className="form-style">
      <h1>Registry</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          name="field1"
          placeholder="Your Email"
          onChange={handleRegisterEmail}
        />
        <input
          type="password"
          name="field2"
          placeholder="Your Password"
          onChange={handleRegisterPassword}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default RegisterForm;
