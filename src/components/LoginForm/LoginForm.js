import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/actions/loginUserAction";
import { stateWelcomeCompAction } from "../../redux/actions/stateWelcomeCompAction";
import { login } from "../../services/auth";
import errorMsg from "../../utils/errorMsg";

import "./LoginForm.scss";

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [errorRegistry, setErrorRegistry] = useState("");
  const dispatch = useDispatch();

  const handleLoginEmail = (event) => {
    setLoginEmail(event.target.value);
  };
  const handleLoginPassword = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const userToLogin = {
      email: loginEmail,
      password: loginPassword,
    };

    setError("");

    if (!loginEmail || !loginPassword) {
      setError("Email y password son obligatorios");
    } else {
      dispatch(loginUserAction(userToLogin));
      const result = await login(loginEmail, loginPassword);

      if (result && result.code) {
        const errorUi = errorMsg[result.code];
        setErrorRegistry(errorUi);
      } else {
        dispatch(stateWelcomeCompAction(true));
      }
    }
  };

  return (
    <div className="form-style">
      <h1>Login</h1>
      {error && <div className="form-error">{error}</div>}
      {errorRegistry && <div className="form-error">{errorRegistry}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="field1"
          placeholder="Your Email"
          onChange={handleLoginEmail}
        />
        <input
          type="password"
          name="field2"
          placeholder="Your Password"
          onChange={handleLoginPassword}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
