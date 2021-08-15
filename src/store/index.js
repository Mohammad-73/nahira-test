import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import userReducer from "./user/user.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
