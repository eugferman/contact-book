import { combineReducers } from "redux";
import loginUserReducer from "./loginUserReducer";
import registerUserReducer from "./registerUserReducer";
import stateWelcomeCompReducer from "./stateWelcomeCompReducer";
import stateDashboardCompReducer from "./stateDashboardCompReducer";
import userToEditReducer from "./userToEditReducer";

const allReducers = combineReducers({
  dataLoginUser: loginUserReducer,
  dataRegisterUser: registerUserReducer,
  dataWelcome: stateWelcomeCompReducer,
  dataDashboard: stateDashboardCompReducer,
  dataUserToEdit: userToEditReducer,
});

export default allReducers;
