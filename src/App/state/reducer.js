import { appConstants } from "./action-types";

const initialState = {
  appTitle: "test",
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case appConstants.UPDATE_APP_TITLE:
      return {
        ...state,
        appTitle: action.appTitle,
      };
    default:
      return state;
  }
};
export { app };
