import { userSignUpConstants } from "./action-types";
import { userDataApi } from "../utils/api";

/**
 * All Actions for Admin
 */

/**
 * To update Admin state
 * @param {string} auth
 */
const signUpError = (error) => {
  return {
    type: userSignUpConstants.USER_SIGN_UP_FAILURE,
    userSignupError: error,
    userSignupLoading: false,
  };
};

const signUpSuccess = (response) => {
  // localStorage.setItem("userAuth", response.data.info.accessToken);
  // localStorage.setItem("roleType", response.data.info.roles[0].roleType);
  // localStorage.setItem("username", response.data.info.firstName);
  return {
    type: userSignUpConstants.USER_SIGN_UP_SUCCESS,
    userAuth: response.data.info.accessToken,
    userSignupData: response.data.info,
    userSignupLoading: false,
  };
};

const personSignUp = (data) => {
  // const params = new URLSearchParams();
  // params.append("firstName", data.name);
  return (dispatch, getState) => {
    userDataApi
      .personSignUpRequest(data)
      .then((response) => {
        dispatch(signUpSuccess(response));
      })
      .catch((error) => {
        dispatch(signUpError(error));
      });
  };
};

const logInError = (error) => {
  return {
    type: userSignUpConstants.USER_LOG_IN_FAILURE,
    userLogInError: error,
    userLogInLoading: false,
  };
};

const logInSuccess = (response) => {
  localStorage.setItem("roleType", response.data.info.roles[0].roleType);
  localStorage.setItem("username", response.data.info.firstName);
  localStorage.setItem("userAuth", response.data.info.accessToken);
  return {
    type: userSignUpConstants.USER_LOG_IN_SUCCESS,
    roleType: response.data.info.roles[0].roleType,
    userAuth: response.data.info.accessToken,
    userLogInData: response.data.info,
    userLogInLoading: false,
  };
};

const userLogin = (data) => {
  return (dispatch, getState) => {
    userDataApi
      .userLogInApiRequest(data)
      .then((response) => {
        dispatch(logInSuccess(response));
      })
      .catch((error) => {
        dispatch(logInError(error));
      });
  };
};

const userForgetPasswordError = (error) => {
  return {
    type: userSignUpConstants.USER_FORGET_PASSWORD_FAILURE,
    userForgetPasswordError: error,
    userForgetPasswordLoading: false,
  };
};

const userForgetPasswordSuccess = (response) => {
  return {
    type: userSignUpConstants.USER_FORGET_PASSWORD_SUCCESS,
    userForgetPasswordData: response.data.statusCode,
    userForgetPasswordLoading: false,
  };
};

const userForgetPassword = (data) => {
  return (dispatch, getState) => {
    userDataApi
      .userForgetPasswordRequest(data)
      .then((response) => {
        dispatch(userForgetPasswordSuccess(response));
      })
      .catch((error) => {
        dispatch(userForgetPasswordError(error));
      });
  };
};

const userForgetPasswordCodeVerificationError = (error) => {
  return {
    type: userSignUpConstants.FORGET_PASSWORD_VERIFICATION_FAILURE,
    verificationError: error,
    verificationLoading: false,
  };
};

const userForgetPasswordCodeVerificationSuccess = (response) => {
  return {
    type: userSignUpConstants.FORGET_PASSWORD_VERIFICATION_SUCCESS,
    verificationData: response,
    verificationLoading: false,
  };
};

const userForgetPasswordCodeVerification = (data) => {
  return (dispatch, getState) => {
    userDataApi
      .userForgetPasswordCodeVerificationRequest(data)
      .then((response) => {
        dispatch(userForgetPasswordCodeVerificationSuccess(response));
      })
      .catch((error) => {
        dispatch(userForgetPasswordCodeVerificationError(error));
      });
  };
};

const logOut = () => {
  localStorage.clear();
  return {
    type: userSignUpConstants.LOGOUT_ACTION,
    authLoading: true,
    username: null,
    auth: null,
    logOutRedirect: true,
  };
};
const resetError = () => {
  return {
    type: userSignUpConstants.RESET_ERROR,
  };
};

export const userSignUpAction = {
  personSignUp,
  userLogin,
  // logOut,
  userForgetPassword,
  userForgetPasswordCodeVerification,
  resetError,
};
