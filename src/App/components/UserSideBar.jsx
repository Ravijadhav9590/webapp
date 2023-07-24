import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import {
  UnorderedListOutlined,
  EditOutlined,
  DashboardOutlined,
  LeftCircleFilled,
  RightCircleFilled,
  CloudUploadOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import Logo from "../../Assets/Icons/Logo.png";
import styles from "../styles/PrivateRoute.module.css";
import { Link } from "react-router-dom";
const { Sider } = Layout;

function UserSideBar({ toggle, collapsed }) {
  const [ScreenWidth, setScreenWidth] = useState();
  const [selectedKey, setSelectedKey] = useState("0");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedKey("0");
        break;
      case "/listing":
        setSelectedKey("1");
        break;
      case "/listEdit":
        setSelectedKey("2");
        break;
      case "/upload":
        setSelectedKey("3");
        break;
      case "/user":
        setSelectedKey("4");
        break;
      default:
        break;
    }
    return () => {};
  }, [location]);

  let handleResize = (e) => {
    if (window.innerWidth < 700) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.addEventListener("load", handleResize);
  });

  let handleClick = (e) => {
    setSelectedKey(e.key);
  };
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={ScreenWidth ? true : collapsed}
      // breakpoint="lg"
      collapsedWidth={ScreenWidth ? (collapsed ? "0px" : "80px") : "80px"}
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      style={{
        backgroundColor: "#4e73df",
        backgroundImage: `linear-gradient(
        180deg
        ,#4e73df 10%,#224abe 100%)`,
        maxWidth: "100% !important",
        minWidth: "100% !important",
        width: "100% !important",
        display: "flex",
        justifyContent: "center",
      }}
      onCollapse={(collapsed, type) => {}}
    >
      {/* <Link to="/">
        <div style={{ textAlign: "center" }}>
          <img
            className={styles.logo}
            style={{ width: "52px", height: "auto" }}
            src={Logo}
            alt="Logo"
          />
        </div>
      </Link>
      <Menu
        style={{
          background: "transparent",
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        selectedKeys={[selectedKey]}
        onClick={handleClick}
      >
        <Menu.Item
          key={"0"}
          icon={
            <DashboardOutlined
              style={
                collapsed
                  ? { fontSize: "25px" }
                  : { fontSize: "18px", color: "white" }
              }
            />
          }
        >
          <Link to="/">
            <span style={{ color: "#fff" }}>Client</span>
          </Link>
        </Menu.Item>
        <Menu.Item
          key={"1"}
          icon={
            <UnorderedListOutlined
              style={
                collapsed
                  ? { fontSize: "25px" }
                  : { fontSize: "18px", color: "white" }
              }
            />
          }
        >
          <Link to="/listing">
            {" "}
            <span style={{ color: "#fff" }}>Template</span>
          </Link>
        </Menu.Item>
        <Menu.Item
          key={"2"}
          icon={
            <EditOutlined
              style={
                collapsed
                  ? { fontSize: "25px" }
                  : { fontSize: "18px", color: "white" }
              }
            />
          }
        >
          <Link to="/listEdit">
            <span style={{ color: "#fff" }}>Template2</span>
          </Link>
        </Menu.Item>
        <Menu.Item
          key={"3"}
          icon={
            <CloudUploadOutlined
              style={
                collapsed
                  ? { fontSize: "25px" }
                  : { fontSize: "18px", color: "white" }
              }
            />
          }
        >
          <Link to="/upload">
            <span style={{ color: "#fff" }}> Template3</span>
          </Link>
        </Menu.Item>
        <Menu.Item
          key={"4"}
          icon={
            <ContainerOutlined
              style={
                collapsed
                  ? { fontSize: "25px" }
                  : { fontSize: "18px", color: "white" }
              }
            />
          }
        >
          <Link to="/user">
            <span style={{ color: "#fff" }}>Template4</span>
          </Link>
        </Menu.Item>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              margin: "1.5rem 0",
              border: "1px solid",
              borderBottom: "#fff",
              width: "72%",
            }}
          ></div>
        </div>
        <Menu.Item key={"6"}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {collapsed ? (
              <>
                <RightCircleFilled
                  onClick={toggle}
                  style={{ fontSize: "25px" }}
                />{" "}
              </>
            ) : (
              <>
                <LeftCircleFilled
                  onClick={toggle}
                  style={{ fontSize: "25px" }}
                />
              </>
            )}
          </div>
        </Menu.Item>
      </Menu> */}
      test
    </Sider>
  );
}
export { UserSideBar };
