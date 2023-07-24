import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Layout,
  Switch,
  Menu,
  Form,
  Input,
  Button,
  Row,
  Select,
  DatePicker,
  Tooltip,
} from "antd";
import {
  UserOutlined,
  ToolOutlined,
  NotificationOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import styles from "./styles/Accounts.module.css";
// import { listingDataHandle } from "./state/actions";
// import { suggessionAction } from "../Suggestion/state/actions";
import { ContentList } from "./components/ContentList";
import { Genral } from "./components/Genral";
import { Loading } from "../Common/components/Loading";
import { ContentTable } from "./components/ContentTable";
import { NotAutharised } from "../Common/components/NotAutharised";

const { Option } = Select;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
// const { Content } = Layout;

function Account(props) {
  useEffect(() => {
    if (props.networkConnection === false) {
      window.location.reload();
    }
  }, [props]);
  const dispatch = useDispatch();

  // const { listingData, listLoading } = useSelector(
  //   (state) => state.listingPage
  // );

  useEffect(() => {
    // dispatch(suggessionAction.getSuggesionList());
  }, [dispatch]);

  //maintaing temp state
  // const [loading, setTemp] = useState(true);
  // const { getSuggesionData } = useSelector((state) => state.suggestion);

  // useEffect(() => {
  //   dispatch(listingDataHandle.getListingData());
  //   return () => {
  //     dispatch(listingDataHandle.resetListingData());
  //   };
  // }, [dispatch]);
  const [switchToggle, handleToggle] = useState(true);
  const [menuSelect, SetMenuselect] = useState("1");
  let handleSubMenuChange = (e) => {
    SetMenuselect(e.key);
  };

  return (
    <Layout style={{ height: "100%", padding: "0px" }}>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
          onClick={handleSubMenuChange}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Genral
          </Menu.Item>
          <Menu.Item key="2" icon={<ToolOutlined />}>
            Change Password
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            Information
          </Menu.Item>
        </Menu>
      </Sider>
      {/* <Content style={{ padding: "0 24px" }}>Content</Content> */}
      <Content
        style={{
          overflow: "auto",
          background: "#fff",
          padding: "1rem",
          marginLeft: "1rem",
        }}
      >
        {menuSelect === "1" ? (
          <Genral />
        ) : menuSelect === "2" ? (
          " <ChangePassword />"
        ) : (
          " <Information />"
        )}
      </Content>
    </Layout>
  );
}

export { Account };
