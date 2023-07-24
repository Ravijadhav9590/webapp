import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Tooltip,
  Select,
  Typography,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "../styles/User.module.css";
const { Option } = Select;
const { Text } = Typography;

function validateMessages(label) {
  return {
    required: `${label} is required!`,
    types: {
      email: `${label} is not a valid email!`,
      number: `${label} is not a valid number!`,
    },
  };
}

function SecondPage({ onFinish, onPrePageClick }) {
  return (
    <div>
      <Form
        layout="vertical"
        name="normal"
        className={styles.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        validateMessages={validateMessages}
        scrollToFirstError
      >
        <Form.Item
          name="roleType"
          label="Select Role"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your Role!",
            },
          ]}
        >
          <Select placeholder="Please select a Role" allowClear>
            <Option value="CUSTOMER">CUSTOMER</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please enter your Phone Number!",
            },
          ]}
        >
          <Input placeholder="Input Phone Number" allowClear />
        </Form.Item>

        <Form.Item
          name="countryCode"
          label="Select Country"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Select placeholder="Please select a country" allowClear>
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          {/* <Form.Item name="remember" valuePropName="checked" noStyle> */}
          {/* <Row justify="start"> */}
          <Checkbox style={{ color: "#7f8082" }}>
            By SignUp I agree with <Link to="/login"> Terms & Conditions</Link>
          </Checkbox>
          {/* </Row> */}
          {/* </Form.Item> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.btnPrimary}
          >
            Get Started
          </Button>
          <Row justify="center">
            <Text type="secondary">
              <Link to="/login"> Back to login</Link>
            </Text>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row justify="start">
            <Tooltip title="Previous">
              <Button
                onClick={onPrePageClick}
                type="primary"
                shape="circle"
                icon={<ArrowLeftOutlined />}
                size="large"
              />
            </Tooltip>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}

export { SecondPage };
