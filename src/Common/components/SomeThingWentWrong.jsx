import React from "react";
import { Result, Button } from "antd";

function SomeThingWentWrong({ message, Back }) {
  return <Result status="500" title="400" subTitle={message} />;
}

export { SomeThingWentWrong };
