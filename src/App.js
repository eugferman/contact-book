// React imports
import React from "react";

// Redux imports
import { useSelector } from "react-redux";

// Components and pages imports
import Welcome from "./pages/welcome/Welcome";
import Dashboard from "./pages/dashboard/Dashboard";

// Style imports
import "./App.scss";

function App() {
  const stateWelcome = useSelector((state) => state.dataWelcome);

  return (
    <div>
      {!stateWelcome && <Welcome />}
      {stateWelcome && <Dashboard />}
    </div>
  );
}

export default App;
