import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const allReducers = combineReducers({
  dataName: dataReducer,
});

export default allReducers;
