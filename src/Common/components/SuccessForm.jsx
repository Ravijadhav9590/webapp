import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

function SuccessForm({ title, subTitle, flag }) {
  let redirectHome = async () => {
    await window?.ReactNativeWebView?.postMessage("WINDOW_CLOSED");
  };
  return (
    <Result
      status="success"
      title={title} //"Successfully Purchased Contract!"
      subTitle={subTitle} //"Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={
        flag && (
          <Button type="primary" onClick={redirectHome} key="console" danger>
            {/* <Link style={{ fontWeight: 600 }} to="/listing"> */}
            Go to Contract List
            {/* </Link> */}
          </Button>
        )
      }
    />
  );
}

export { SuccessForm };
