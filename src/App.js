// React imports
import React from "react";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "./redux/actions/dataAction";

// Components imports
import Title from "./components/Title/Title";

// Style imports
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const nameOfRedux = useSelector((state) => state.dataName);

  const launchRedux = () => {
    const dataName = "Hi Redux!!";
    dispatch(dataAction(dataName));
  };

  return (
    <div>
      <h1>Hi app!</h1>
      <Title />
      <button onClick={launchRedux}>Launch redux</button>
      <p>{nameOfRedux}</p>
    </div>
  );
}

export default App;
