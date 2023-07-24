import React from "react";
import { Statistic, Row, Col, Card, Typography } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import styles from "../styles/Dashboard.module.css";
const { Text } = Typography;

function StatCard({ index, title, value, titleChange, valuechange }) {
  let getclass = () => {
    let className;
    switch (index) {
      case 0:
        className = "";
        break;
      case 1:
        className = styles.cardSettingsSecond;
        break;
      case 2:
        className = styles.cardSettingsThird;
        break;
      case 3:
        className = styles.cardSettingsFourth;
        break;
      default:
        className = "";
        break;
    }
    return className;
  };

  return (
    <Card hoverable className={styles.cardSettings + " " + getclass()}>
      <Row gutter={[12, 12]} justify="center">
        <Col span={12}>
          <Statistic
            title={
              <Text style={{ width: "100%" }} ellipsis={true}>
                {title}
              </Text>
            }
            value={value}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={
              <Text style={{ width: "100%" }} ellipsis={true}>
                {titleChange}
              </Text>
            }
            value={valuechange && valuechange && Math.abs(valuechange)}
            precision={2}
            valueStyle={
              valuechange && valuechange < 0
                ? { color: "#f44336" }
                : { color: "#3f8600" }
            }
            prefix={
              valuechange && valuechange < 0 ? (
                <ArrowDownOutlined />
              ) : (
                <ArrowUpOutlined />
              )
            }
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
}
export { StatCard };
