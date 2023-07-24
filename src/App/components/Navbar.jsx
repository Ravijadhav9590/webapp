import React from "react";
import { useDispatch } from "react-redux";
import Logo from "../../Assets/Icons/Logo.png";
import { Link } from "react-router-dom";
import { Avatar, Menu, Dropdown, Layout, Row, Col, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { adminAction } from "../../Authenticate/state/actions";
const { Header } = Layout;
const { Text } = Typography;

/**
 * @function Navbar
 * @returns {Object} JSX.element
 * Navbar component which is rendered for all protected routes or redirects if user is not logged in
 */
function Navbar({ getUserName, toggle, collapsed }) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(adminAction.logOut());
  };
  const menu = (
    <Menu>
      <Menu.Item key="0" disabled>
        Hi {getUserName}
      </Menu.Item>
      <Menu.Item key="1" onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          background: "hsl(208deg 89% 30%)",
          height: "50px",
          lineHeight: "50px",
        }}
      >
        <Row>
          <Col
            flex="1 1 80px"
            style={{
              fontSize: "25px",
              lineHeight: "50px",
              paddingLeft: "10px",
              cursor: "pointer",
              transition: "all .5s ease-in-out",
              color: "rgb(78, 115, 223)",
            }}
          >
            <Link to="/">
              <div style={{ textAlign: "left" }}>
                <img
                  style={{ width: "35px", height: "auto" }}
                  src={Logo}
                  alt="Logo"
                />
              </div>
            </Link>
          </Col>
          <Col flex="0 1 130px">
            <Text
              key="7"
              style={{
                color: "#fff",
                marginRight: "10px",
                textTransform: "capitalize",
              }}
            >
              {getUserName}
            </Text>
            <Dropdown key="4" overlay={menu} trigger={["click", "hover"]}>
              <Avatar key="5" size="large" icon={<UserOutlined />} />
            </Dropdown>
          </Col>
        </Row>
      </Header>
    </>
  );
}
export { Navbar };
