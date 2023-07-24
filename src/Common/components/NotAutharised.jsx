import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

function NotAutharised(flag) {
  let history = useHistory();
  let redirectToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          flag === true && (
            <Button type="primary" onClick={redirectToHome}>
              Back Home
            </Button>
          )
        }
      />
    </div>
  );
}

export { NotAutharised };
