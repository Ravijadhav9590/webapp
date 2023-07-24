import { adminConstants } from "./action-types";

const initialState = {
  auth: null,
  authError: null,
  userData: null,
  authLoading: true,
  username: null,
  roleType: null,
  logOutRedirect: false,
  currentUser: null,
};

const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case adminConstants.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        authLoading: action.authLoading,
        roleType: action.roleType,
        auth: action.auth,
        userData: action.userData,
        username: action.username,
      };
    case adminConstants.AUTHENTICATION_FAILURE:
      return {
        ...state,
        authError: action.authError,
        authLoading: action.authLoading,
      };
    case adminConstants.LOGOUT_ACTION:
      return {
        ...state,
        authLoading: action.authLoading,
        username: action.username,
        auth: action.auth,
        currentUser: action.currentUser,
        logOutRedirect: action.logOutRedirect,
      };
    case adminConstants.RESET_ERROR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export { authenticate };
