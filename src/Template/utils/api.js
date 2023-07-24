import axios from "axios";
import dotEnv from "dotenv";
dotEnv.config();

const apiURL = process.env.REACT_APP_BASE_URL;

const dashboardDataRequest = () => {
  let accessTokan = localStorage.getItem("auth");
  return axios.get(`${apiURL}/admin/dashboardData`, {
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};

export const dashboardDataApi = {
  dashboardDataRequest,
};
