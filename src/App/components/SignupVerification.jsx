import React from "react";
// import { Card, Row, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
// const { Title, Text } = Typography;
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

function SignupVerification() {
  const location = useLocation();
  return (
    <div>
      <Result
        icon={<SmileOutlined />}
        title="We sent you the verification link to your Email id. Please verify!"
        extra={
          <>
            Click
            <Link
              to={{
                pathname: "/login",
                state: { email: location.state.email },
              }}
            >
              {" "}
              here{" "}
            </Link>
            to Login.
          </>
        }
      />
    </div>
  );
}
export { SignupVerification };
