import { combineReducers } from "redux";

// reducers
import navReducer from "./nav.reducers";

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer;
