import React, { useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { SideBar } from "./SideBar";
import { Navbar } from "./Navbar";
import { Layout, Alert } from "antd";
import { UserSideBar } from "./UserSideBar";
import { NotAutharised } from "../../Common/components/NotAutharised";

// import styles from "../styles/PrivateRoute.module.css";

const { Content, Footer } = Layout;

/**
 * @function PrivateRoute
 * @param {Object} Object parent object paraments
 * @returns {Object} JSX.Element
 * Higher order function that validates the auth token before proceeding
 */

export const PrivateRoute = ({
  component: Component,
  roleDisplay,
  networkConnection,
  ...rest
}) => {
  // let { search } = useLocation();
  // let queryParams = new URLSearchParams(search);
  // localStorage.setItem("userAuth", queryParams.get("mobileToken"));
  // let mobileAuth = queryParams.get("mobileToken") || null;
  // console.log(mobileAuth);

  const { roleType } = useSelector((state) => state.authenticate);

  let role = roleType && roleType ? roleType : localStorage.getItem("roleType");

  const [collapsed, setCollapsed] = useState(true);

  let localAuth = localStorage.getItem("auth");
  let localUserAuth =
    localStorage.getItem("userAuth") || localStorage.getItem("mobileToken");
  // let localUserAuth = localStorage.getItem("userAuth");

  let getUserName =
    role === "Admin"
      ? localStorage.getItem("adminName")
      : localStorage.getItem("username");

  let accessToken = role === "Admin" ? localAuth : localUserAuth;
  // let accessToken = localStorage.getItem("userAuth");

  let toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken && getUserName ? (
          // props.roleDisplay && props.roleDisplay === "Admin" ? (
          <>
            <div>
              <Layout style={{ height: "100vh" }}>
                <Navbar
                  getUserName={getUserName}
                  toggle={toggle}
                  collapsed={collapsed}
                />
                <SideBar />
                <Layout>
                  <Content
                    style={{
                      overflow: "auto",
                      margin: "24px 16px 0",
                      background: "rgb(202, 202, 202)",
                    }}
                  >
                    {networkConnection && (
                      <div
                        style={{
                          paddingBottom: "10px",
                          backgroundColor: "#f0f2f5",
                        }}
                      >
                        <Alert message="No internet" type="error" />
                      </div>
                    )}
                    <Component
                      networkConnection={networkConnection}
                      roleDisplay={roleDisplay}
                      {...props}
                    />
                  </Content>
                  <Footer style={{ textAlign: "center" }}>Design ©2021</Footer>
                </Layout>
              </Layout>
            </div>
          </>
        ) : (
          // ) : (
          //   <NotAutharised />
          // )
          <Redirect to="/login" />
        )
      }
    />
  );
};
