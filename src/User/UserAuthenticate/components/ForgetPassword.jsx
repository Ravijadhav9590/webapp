import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactCodesInput from "react-codes-input";
import "react-codes-input/lib/react-codes-input.min.css";
import { userSignUpAction } from "../state/actions";
import { Form, Input, Button, Typography, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../styles/User.module.css";
import { Link } from "react-router-dom";

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
function ForgetPassword() {
  const [activation, setActivation] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const { userForgetPasswordData, verificationData = 200 } = useSelector(
    (state) => state.userSignup
  );

  let onFinish = (event) => {
    dispatch(userSignUpAction.userForgetPassword(event));
  };

  let onActivationFinish = () => {
    if (activation === undefined) {
      setError(activation);
    } else {
      setError(activation);
      dispatch(userSignUpAction.userForgetPasswordCodeVerification(activation));
    }
  };

  console.log(
    "userForgetPasswordData",
    userForgetPasswordData,
    activation,
    verificationData
  );
  return verificationData === 200 ? (
    <div style={{ padding: "0 5rem" }}>hi</div>
  ) : (
    // <Redirect to={{ pathname: "/passwordVerified", state: { role: "user" } }} />
    <div style={{ padding: "0 5rem" }}>
      {userForgetPasswordData && userForgetPasswordData === 200 ? (
        <Form layout="vertical" onFinish={onActivationFinish}>
          <Form.Item>
            <ReactCodesInput
              initialFocus={true}
              id="activation"
              codeLength={4}
              type="alphanumeric" // ['alphanumeric', 'alpha', 'number']
              hide={false}
              placeholder=""
              onChange={(res) => {
                setActivation(res);
              }}
              letterCase="upper"
              customStyleComponent={{
                maxWidth: "300px",
                margin: "0 auto",
              }}
            />
            {error === undefined && (
              <Text type="danger">Please enter the code !</Text>
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.btnPrimary}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <>
          <div style={{ paddingBottom: "1rem" }}>
            <h1 className={styles.custFormH1}>Forgot Password</h1>
            <h2 className={styles.custFormH2}>
              You can reset your password here.
            </h2>
          </div>
          <Form
            layout="vertical"
            name="normal_login"
            className={styles.loginForm}
            initialValues={{
              remember: true,
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

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.btnPrimary}
              >
                Reset my password
              </Button>
              <Row justify="center">
                <Text type="secondary">
                  <Link to="/login"> Back to login</Link>
                </Text>
              </Row>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
}
export { ForgetPassword };
