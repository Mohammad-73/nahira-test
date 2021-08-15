import { createStore, combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(reducer);

export default store;
