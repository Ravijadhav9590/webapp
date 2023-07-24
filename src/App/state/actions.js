import { appConstants } from "./action-types";
// import axios from "axios";
// import dayjs from "dayjs";

// const apiURL = process.env.REACT_APP_BASEURL;

/**
 * All Actions for App
 */

/**
 * To update Navbar title action
 * @param {string} navbar_title
 */

const updateNavbarTitle = (text) => {
  return {
    type: appConstants.UPDATE_APP_TITLE,
    appTitle: text,
  };
};

export const appStatusChange = {
  updateNavbarTitle,
};
