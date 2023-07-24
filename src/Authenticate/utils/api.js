import axios from "axios";
import dotEnv from "dotenv";
dotEnv.config();

const apiURL = process.env.REACT_APP_BASE_URL;

const adminCredentialRequest = (data) => {
  return axios.post(
    `${apiURL}/admin/login`,
    {
      ...data,
    },
    {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    }
  );
};

export const adminDataApi = {
  adminCredentialRequest,
};
