import { adminConstants } from "./action-types";
import { adminDataApi } from "../utils/api";

/**
 * All Actions for Admin
 */

/**
 * To update Admin state
 * @param {string} auth
 */
const authError = (error) => {
  return {
    type: adminConstants.AUTHENTICATION_FAILURE,
    authError: error,
    authLoading: false,
  };
};

const authSuccess = (response) => {
  localStorage.setItem("auth", response.data.info.accessToken);
  localStorage.setItem("roleType", response.data.info.roles[0].roleType);
  localStorage.setItem("adminName", response.data.info.name);
  return {
    type: adminConstants.AUTHENTICATION_SUCCESS,
    auth: response.data.info.accessToken,
    username: response.data.info.name,
    roleType: response.data.info.roles[0].roleType,
    userData: response.data.info,
    authLoading: false,
  };
};

const getAuthentication = (data) => {
  return (dispatch, getState) => {
    // const token = getState().authentication.token;
    // const token = true;
    adminDataApi
      .adminCredentialRequest(data)
      .then((response) => {
        dispatch(authSuccess(response));
      })
      .catch((error) => {
        dispatch(authError(error));
      });
  };
};

const logOut = () => {
  let currentUser = localStorage.getItem("roleType");
  localStorage.clear();
  return {
    type: adminConstants.LOGOUT_ACTION,
    authLoading: true,
    username: null,
    auth: null,
    currentUser: currentUser,
    logOutRedirect: true,
  };
};
const resetError = () => {
  return {
    type: adminConstants.RESET_ERROR,
  };
};

export const adminAction = {
  getAuthentication,
  logOut,
  resetError,
};
