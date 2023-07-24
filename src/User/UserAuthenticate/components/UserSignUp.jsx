import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignUpAction } from "../state/actions";
import styles from "../styles/User.module.css";
import { useState } from "react";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { Redirect } from "react-router-dom";

function UserSignUp() {
  const dispatch = useDispatch();

  const {
    roleType,
    userSignupError,
    userSignupLoading,
    userSignupData,
  } = useSelector((state) => state.userSignup);

  console.log(
    "userSignupError, userSignupLoading, userSignupData",
    userSignupError,
    userSignupLoading,
    userSignupData,
    roleType
  );

  const [nextpage, setNextPage] = useState(true);
  const [firstPageData, setFirstPageData] = useState();

  let onNexPageClick = (event) => {
    setFirstPageData(event);
    setNextPage(false);
  };

  let onPrePageClick = () => {
    setNextPage(true);
  };

  let onFinish = (event) => {
    let allInputFields = { ...event, ...firstPageData };
    dispatch(userSignUpAction.personSignUp(allInputFields));
  };

  // "firstName": "string",
  // "lastName": "string",
  // "middleName": "string",
  // "ethnicity": "string",
  // "gender": "string",
  // "SSN": "string",
  // "email": "string",
  // "countryCode": "string",
  // "phoneNumber": "string",
  // "addressId": "string",
  // "password": "string",
  // "birthDate": "2021-05-19",
  // "profileImg": {
  //   "original": "string",
  //   "thumbnail": "string"
  // },
  // "roleType": "CUSTOMER"
  let localAuth = localStorage.getItem("userAuth");
  let accessToken = localAuth;
  return userSignupData ? (
    // <SignupVerification />
    <Redirect
      to={{
        pathname: "/login",
        state: { email: userSignupData && userSignupData.email },
      }}
    />
  ) : (
    <div style={{ padding: "0 5rem" }}>
      <div style={{ paddingBottom: "1rem" }}>
        <h1 className={styles.custFormH1}>Sign Up</h1>
        <h2 className={styles.custFormH2}>
          Sign Up to try our amazing services
        </h2>
      </div>
      <div style={{ height: "100%", transition: "height 0.25s linear" }}>
        {nextpage ? (
          <FirstPage
            firstPageData={firstPageData}
            onNexPageClick={onNexPageClick}
          />
        ) : (
          <SecondPage onFinish={onFinish} onPrePageClick={onPrePageClick} />
        )}
      </div>
    </div>
  );
}
export { UserSignUp };
