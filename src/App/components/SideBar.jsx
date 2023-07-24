import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Menu } from "antd";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import {
  HomeOutlined,
  FileTextOutlined,
  ProfileOutlined,
  UserOutlined,
  ToolOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { adminAction } from "../../Authenticate/state/actions";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

function SideBar({ toggle, collapsed }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState("0");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/document":
        setSelectedKey("0");
        break;
      case "/property":
        setSelectedKey("1");
        break;
      case "/template":
        setSelectedKey("2");
        break;
      case "/client":
        setSelectedKey("3");
        break;
      case "/Account":
        setSelectedKey("4");
        break;
      default:
        break;
    }
    return () => {};
  }, [location]);

  let handleClick = (e) => {
    setSelectedKey(e.key);
    if (e.key === "Account") {
      history.push("/account");
    } else if (e.key === "Change Password") {
    } else if (e.key === "LogOut") {
      dispatch(adminAction.logOut());
    }
  };
  return (
    <Menu
      mode="horizontal"
      theme="light"
      // onSelect={onMenuSelect}
      defaultSelectedKeys={["0"]}
      selectedKeys={[selectedKey]}
      onClick={handleClick}
    >
      <Menu.Item key={"0"} icon={<FileTextOutlined />}>
        <Link to="/document">
          <span>Document</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={"1"} icon={<HomeOutlined />}>
        <Link to="/property">
          {" "}
          <span>Property</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={"2"} icon={<ProfileOutlined />}>
        <Link to="/template">
          <span>Template</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={"3"} icon={<UserOutlined />}>
        <Link to="/client">
          <span>Client</span>
        </Link>
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<UserAddOutlined />} title="Account">
        {/* <Menu.ItemGroup title="Item 1"> */}
        <Menu.Item key="Account" icon={<UserAddOutlined />}>
          Account
        </Menu.Item>
        <Menu.Item key="Change Password" icon={<ToolOutlined />}>
          Change Password
        </Menu.Item>
        <Menu.Item key="LogOut" icon={<LogoutOutlined />}>
          LogOut
        </Menu.Item>
        {/* </Menu.ItemGroup> */}
      </SubMenu>
      {/* <Menu.Item key={"4"} icon={<UserAddOutlined />}>
        <Link to="/account">
          <span>Account</span>
        </Link>
      </Menu.Item> */}
    </Menu>
  );
}
export { SideBar };
