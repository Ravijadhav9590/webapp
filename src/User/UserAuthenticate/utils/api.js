import axios from "axios";
import dotEnv from "dotenv";
dotEnv.config();

const apiURL = process.env.REACT_APP_BASE_URL;

// const personSignUpRequest = () => {
//   let accessTokan = localStorage.getItem("userAuth");

//   return axios.get(`${apiURL}/person`, {
//     params: {
//       skip: 0,
//       limit: 50,
//     },
//     headers: {
//       accept: "application/json",
//       authorization: `bearer ${accessTokan}`,
//     },
//   });
// };

const personSignUpRequest = (data) => {
  // let accessTokan = localStorage.getItem("userAuth");

  return axios.post(`${apiURL}/person/register`, data, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
};

const userForgetPasswordRequest = (data) => {
  let mail = { emailId: data.email };
  return axios.post(`${apiURL}/person/forgetPasswordInti`, mail, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
};

const userForgetPasswordCodeVerificationRequest = (data) => {
  let code = { code: data };
  return axios.post(`${apiURL}/person/codeVerification`, code, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
};

const userLogInApiRequest = (data) => {
  return axios.post(`${apiURL}/person/login`, data, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
};

// const changeStatusRequest = (id, status) => {
//   let accessTokan = localStorage.getItem("auth");
//   return axios.put(
//     `${apiURL}/person/${id}`,
//     {
//       isActive: !status ? true : false,
//     },
//     {
//       headers: {
//         accept: "application/json",
//         authorization: `bearer ${accessTokan}`,
//       },
//     }
//   );
// };

// const verifyEmailRequest = (id) => {
//   let accessTokan = localStorage.getItem("auth");
//   return axios.put(
//     `${apiURL}/person/${id}`,
//     {
//       isEmailVerified: true,
//     },
//     {
//       headers: {
//         accept: "application/json",
//         authorization: `bearer ${accessTokan}`,
//       },
//     }
//   );
// };

export const userDataApi = {
  personSignUpRequest,
  userLogInApiRequest,
  // changeStatusRequest,
  // verifyEmailRequest,
  userForgetPasswordRequest,
  userForgetPasswordCodeVerificationRequest,
};
