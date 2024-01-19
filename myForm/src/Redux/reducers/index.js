import { combineReducers } from "redux";
import formReducer from "./formReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  form: formReducer,
  address: addressReducer,
});

export default rootReducer;
