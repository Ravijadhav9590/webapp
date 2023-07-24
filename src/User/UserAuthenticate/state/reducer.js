import { userSignUpConstants } from "./action-types";

const initialState = {
  userAuth: null,
  userSignupError: null,
  userSignupLoading: true,
  userSignupData: null,
  logOutRedirect: false,
  userLogInData: null,
  userLogInLoading: null,

  userForgetPasswordData: null,
  userForgetPasswordLoading: true,
  userForgetPasswordError: null,

  verificationData: null,
  verificationLoading: true,
  verificationError: null,

  userLogInError: null,
  roleType: null,
};

const userSignup = (state = initialState, action) => {
  switch (action.type) {
    case userSignUpConstants.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        userAuth: action.userAuth,
        userSignupLoading: action.userSignupLoading,
        userSignupData: action.userSignupData,
      };
    case userSignUpConstants.USER_SIGN_UP_FAILURE:
      return {
        ...state,
        userSignupError: action.userSignupError,
        userSignupLoading: action.userSignupLoading,
      };
    // ForgetPassword request
    case userSignUpConstants.USER_FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        userForgetPasswordData: action.userForgetPasswordData,
        userForgetPasswordLoading: action.userForgetPasswordLoading,
      };
    case userSignUpConstants.USER_FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        userForgetPasswordError: action.userForgetPasswordError,
        userForgetPasswordLoading: action.userForgetPasswordLoading,
      };

    // ForgetPassword Verification request
    case userSignUpConstants.FORGET_PASSWORD_VERIFICATION_SUCCESS:
      return {
        ...state,
        verificationData: action.verificationData,
        verificationLoading: action.verificationLoading,
      };
    case userSignUpConstants.FORGET_PASSWORD_VERIFICATION_FAILURE:
      return {
        ...state,
        verificationError: action.verificationError,
        verificationLoading: action.verificationLoading,
      };

    case userSignUpConstants.USER_LOG_IN_SUCCESS:
      return {
        ...state,
        roleType: action.roleType,
        userLogInData: action.userLogInData,
        userLogInLoading: action.userLogInLoading,
        userAuth: action.userAuth,
      };

    case userSignUpConstants.USER_LOG_IN_FAILURE:
      return {
        ...state,
        userLogInError: action.userLogInError,
        userLogInLoading: action.userLogInLoading,
      };
    // case userSignUpConstants.LOGOUT_ACTION:
    //   return {
    //     ...state,
    //     authLoading: action.authLoading,
    //     username: action.username,
    //     auth: action.auth,
    //     logOutRedirect: action.logOutRedirect,
    //   };
    case userSignUpConstants.RESET_ERROR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export { userSignup };
