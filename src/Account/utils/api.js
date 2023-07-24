import axios from "axios";
import dotEnv from "dotenv";
dotEnv.config();

const apiURL = process.env.REACT_APP_BASE_URL;

const listingPageLoadRequest = () => {
  let accessTokan = localStorage.getItem("auth");
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  };
  return axios(`${apiURL}/listContractJSX`, config);
};

const editCategoryArrayRequest = (token, id, updateData) => {
  let accessTokan = localStorage.getItem("auth");
  const config = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: `bearer ${accessTokan}`,
    },
    data: {
      categoryIds: updateData,
    },
  };
  // return axios(`${apiURL}/common/uploadFile`, config);
  return axios(`${apiURL}/contract/${id}`, config);
};

const deleteContractRequest = (token, id) => {
  let accessTokan = localStorage.getItem("auth");
  // console.log("deleted", id);
  const config = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: `bearer ${accessTokan}`,
    },
    data: {
      isDeleted: true,
    },
  };
  return axios(`${apiURL}/contract/${id}`, config);
};

export const listingDataApi = {
  listingPageLoadRequest,
  editCategoryArrayRequest,
  deleteContractRequest,
};
