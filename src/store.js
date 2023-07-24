import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { account } from "./Account";
import { app } from "./App";
import { client } from "./Client";
import { documentSection } from "./DocumentSection";
import { property } from "./Property";
import { authenticate } from "./Authenticate";
import { template } from "./Template";
import { userSignup } from "./User/UserAuthenticate";

const reducers = {
  account,
  app,
  client,
  documentSection,
  property,
  template,
  authenticate,
  userSignup,
};

const rootReducers = combineReducers(reducers);

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export { store, reducers };
