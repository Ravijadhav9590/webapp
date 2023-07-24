import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Typography, Checkbox, Row, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { userSignUpAction } from "../state/actions";
import styles from "../styles/User.module.css";
import { Link, Redirect, useLocation } from "react-router-dom";

const { Text } = Typography;

/* eslint-enable no-template-curly-in-string */
function validateMessages(label) {
  return {
    required: `${label} is required!`,
    types: {
      email: `${label} is not a valid email!`,
      number: `${label} is not a valid number!`,
    },
  };
}
/* eslint-enable no-template-curly-in-string */
function UserLogin() {
  const location = useLocation();
  const dispatch = useDispatch();
  let onFinish = (event) => {
    dispatch(userSignUpAction.userLogin(event));
  };

  const { userLogInData, userLogInLoading, userLogInError } = useSelector(
    (state) => state.userSignup
  );

  if (userLogInError) {
    message.error(userLogInError.message);
    dispatch(userSignUpAction.resetError());
  }
  let accessToken = localStorage.getItem("userAuth");
  return accessToken ? (
    <Redirect to={{ pathname: "/", state: { role: "user" } }} />
  ) : (
    <div style={{ padding: "0 5rem" }}>
      <div style={{ paddingBottom: "1rem" }}>
        <h1 className={styles.custFormH1}>Sign In</h1>
        <h2 className={styles.custFormH2}>Welcome to Re-sure</h2>
      </div>
      <Form
        layout="vertical"
        name="normal_login"
        className={styles.loginForm}
        initialValues={{
          remember: true,
          email: location && location.state && location.state.email,
        }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Email"
          name="email"
          // name="email"
          rules={[
            {
              required: true,
              type: "email",
              // message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter your Email"
            allowClear
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          // name="password"
          rules={[
            {
              required: true,
              // message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Row justify="space-between">
            <Form.Item>
              <Checkbox style={{ color: "#7f8082" }}>
                Keep me logged in
              </Checkbox>
            </Form.Item>
            <Link to="/forgetpassword"> Forgot Password ?{/* </Text> */}</Link>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.btnPrimary}
          >
            Log in
          </Button>
          <Row justify="center">
            <Text type="secondary">
              Not yet a member ?<Link to="/signup"> Sign up now</Link>
            </Text>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}
export { UserLogin };
