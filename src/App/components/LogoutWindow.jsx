import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Row, Card, Typography } from "antd";
import TempLogo from "../../Assets/Icons/Logo.png";
import styles from "../styles/Logout.module.css";
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function LogoutWindow(props) {
  let location = useLocation();
  console.log("location", location.state);
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Link to={location.state.role === "Admin" ? "/login/admin" : "/login"}>
          <div style={{ textAlign: "center", float: "left" }}>
            <img
              className={styles.logo}
              style={{ width: "52px", height: "auto" }}
              src={TempLogo}
              alt="TempLogo"
            />
          </div>
        </Link>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64, background: "#fff" }}>
        <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
          <Card style={{ width: "100%" }}>
            <Row span={24} align="middle">
              <div>
                <Title level={2}>Logout</Title>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <Text type="secondary">You are now logged out</Text>
              </div>
            </Row>
            <Row span={24} align="middle">
              <div style={{ marginRight: "5px" }}>Click</div>{" "}
              <Link
                to={location.state.role === "Admin" ? "/login/admin" : "/login"}
              >
                {" "}
                here
              </Link>{" "}
              <div style={{ marginLeft: "5px" }}>
                to return to the{" "}
                {location.state.role === "Admin" ? "admin" : "user"} Panel.
              </div>
            </Row>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Design ©2021</Footer>
    </Layout>
  );
}
export { LogoutWindow };
