import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../Assets/Icons/ResureLogoFilled.png";
import styles from "../styles/Admin.module.css";

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
function Login({ onFinish }) {
  return (
    <div>
      <div className={styles.Loginlogo}>
        <img
          // className={styles.logo}
          style={{ width: "52px", height: "auto" }}
          src={Logo}
          alt="Logo"
        />
      </div>
      <div>
        <h1 className={styles.custFormH1}>Sign In</h1>
        <h2 className={styles.custFormH2}>Welcome to Re-sure</h2>
      </div>
      <Form
        name="normal_login"
        className={styles.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
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
            allowClear
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter your Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          // name="password"
          rules={[
            {
              required: true,
              // message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            allowClear
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your Password"
          />
        </Form.Item>
        <Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

          {/* <a className={styles.loginFormForgot} href="*">
            Forgot password
          </a> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.btnPrimary}
          >
            Log in
          </Button>
          {/* Or <a href="*">register now!</a> */}
        </Form.Item>
      </Form>
    </div>
  );
}
export { Login };
