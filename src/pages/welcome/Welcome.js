import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import "./Welcome.scss";

function Welcome() {
  return (
    <div className="welcome-components">
      <div className="welcome-login">
        <LoginForm />
      </div>
      <div className="welcome-register">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Welcome;
