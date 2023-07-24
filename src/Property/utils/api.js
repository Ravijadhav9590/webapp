import axios from "axios";
import dotEnv from "dotenv";
dotEnv.config();

const apiURL = process.env.REACT_APP_BASE_URL;

const contractPageLoadRequest = (tokan, id) => {
  let accessTokan =
    localStorage.getItem("auth") ||
    JSON.parse(localStorage.getItem("mobileToken"));
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  };
  return axios(`${apiURL}/contractJSX/${id}`, config);
};

export const contractDataApi = {
  contractPageLoadRequest,
};
