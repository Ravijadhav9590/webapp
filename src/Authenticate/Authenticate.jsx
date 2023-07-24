import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, message } from "antd";
import { adminAction } from "./state/actions";
import styles from "./styles/Admin.module.css";
import { Login } from "./components/Login";

function Authenticate(props) {
  // useEffect(() => {
  //   if (props.networkConnection === false) {
  //     window.location.reload();
  //   }
  // }, [props]);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(adminAction.getAuthentication(values));
  };

  useEffect(() => {
    document.getElementById("loader") &&
      document.getElementById("loader").remove();
  }, []);

  const {
    auth,
    roleType,
    userData,
    currentUser,
    authError,
    logOutRedirect,
  } = useSelector((state) => state.authenticate);

  let role = roleType && roleType ? roleType : localStorage.getItem("roleType");

  let localAuth = localStorage.getItem("auth");
  let localUserAuth = localStorage.getItem("userAuth");

  // let accessToken = role === "Admin" ? localAuth : localUserAuth;
  let accessToken = localAuth;

  useEffect(() => {
    if (authError) {
      message.error("Login failed: Invalid username or password.");
    }
    return () => {
      dispatch(adminAction.resetError());
    };
  }, [authError, dispatch]);

  if (logOutRedirect)
    return (
      <Redirect
        to={{
          pathname: "/logout",
          state: { role: currentUser },
        }}
      />
    );

  return accessToken ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.alignAdmin}>
      <Card className={styles.custForm}>
        <Login onFinish={onFinish} />
      </Card>
    </div>
  );
}

export { Authenticate };
