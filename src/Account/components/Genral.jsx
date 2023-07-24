import React from "react";
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
import styles from "../styles/Accounts.module.css";
const { Option } = Select;
const { TextArea } = Input;

function validateMessages(label) {
  return {
    required: `${label} is required!`,
    types: {
      email: `${label} is not a valid email!`,
      number: `${label} is not a valid number!`,
    },
  };
}

function Genral() {
  return (
    <Form
      layout="vertical"
      name="1normal_login_page1"
      className={styles.loginForm}
      style={{ padding: "0 5rem" }}
      // initialValues={firstPageData}
      // onFinish={onNexPageClick}
      validateMessages={validateMessages}
      scrollToFirstError
    >
      <Form.Item>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginBottom: 0,
          }}
        >
          <Input placeholder="Input First Name" allowClear />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="Input Last Name" allowClear />
        </Form.Item>
      </Form.Item>

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
        <Form.Item
          name="birthDate"
          label="Birth Date"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginBottom: 0,
          }}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Select
            placeholder="Select gender"
            style={{ width: "100%" }}
            allowClear
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
      </Form.Item>

      <Form.Item
        name="officeAddress"
        label="Office Address"
        rules={[{ required: true }]}
      >
        <TextArea
          //   value={value}
          //   onChange={this.onChange}
          placeholder="Office Address"
          autoSize={{ minRows: 3, maxRows: 5 }}
          allowClear
        />
      </Form.Item>
      <Form.Item>
        <Row justify="end" Style={{ "column-gap": "10px" }}>
          <Button size="default">Reset</Button>
          <Button htmlType="submit" type="primary">
            Save Changes
          </Button>
        </Row>
      </Form.Item>

      {/* <Form.Item>
            <Row justify="end">
              <Tooltip title="Next">
                <Button
                  htmlType="submit"
                  type="primary"
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                  size="large"
                />
              </Tooltip>
            </Row>
          </Form.Item> */}
    </Form>
  );
}
export { Genral };
