import axios from "axios";
import dotEnv from "dotenv";
dotEnv.config();

const apiURL = process.env.REACT_APP_BASE_URL;

const createCategoryRequest = (data, categoryType) => {
  let accessTokan = localStorage.getItem("auth");
  const params = new URLSearchParams();
  params.append("name", data.name);
  params.append("categoryType", categoryType);
  if (data.categoryId) {
    params.append("categoryId", data.categoryId);
  }
  if (data.subCategoryId) {
    params.append("subCategoryId", data.subCategoryId);
  }
  return axios.post(`${apiURL}/category`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};

const uploadImageRequest = (data) => {
  let accessTokan = localStorage.getItem("auth");
  // const params = new URLSearchParams();
  var params = new FormData();
  params.append("fileBase64", data);
  params.append("folderOf", "CATEGORY_IMAGES");

  return axios.post(`${apiURL}/common/uploadFile`, params, {
    headers: {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
      // authorization: `bearer ${accessTokan}`,
    },
  });
};

const getCategoryRequest = () => {
  let accessTokan = localStorage.getItem("auth");
  return axios.get(`${apiURL}/category`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};

const getSubCategoryRequest = (categoryId) => {
  let accessTokan = localStorage.getItem("auth");

  return axios.get(`${apiURL}/subCategory/${categoryId}`, {
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};

const getDockTypeRequest = (subCategoryId) => {
  let accessTokan = localStorage.getItem("auth");
  return axios.get(`${apiURL}/docCategory/${subCategoryId}`, {
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};

const editCategoryRequest = (data, id) => {
  let accessTokan = localStorage.getItem("auth");
  const params = new URLSearchParams();
  params.append("name", data.name);
  return axios.put(`${apiURL}/category/${id}`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};
const UpdateImageUrlRequest = (imageUrl, id, name) => {
  let accessTokan = localStorage.getItem("auth");
  const params = new URLSearchParams();
  params.append("name", name);
  params.append("imageUrl", imageUrl);
  return axios.put(`${apiURL}/category/${id}`, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};

const deleteCategoryRequest = (id) => {
  let accessTokan = localStorage.getItem("auth");
  return axios.delete(`${apiURL}/category/${id}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
      authorization: `bearer ${accessTokan}`,
    },
  });
};

export const categoryDataApi = {
  getCategoryRequest,
  getSubCategoryRequest,
  getDockTypeRequest,
  createCategoryRequest,
  editCategoryRequest,
  deleteCategoryRequest,
  uploadImageRequest,
  UpdateImageUrlRequest,
};
