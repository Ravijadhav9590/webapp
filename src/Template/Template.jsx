import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatCard } from "./components/StatCard";
import { Row, Col, Card, Layout } from "antd";
import { NotAutharised } from "../Common/components/NotAutharised";
import { dashboardAction } from "./state/actions";
import styles from "./styles/Dashboard.module.css";
import { GraphUSA } from "./components/GraphUSA";
import { Polar } from "./components/Polar";
import { VerticalBar } from "./components/VerticalBar";
import { ColumnChartTimeAxis } from "./components/TimePlot";
const { Content } = Layout;

function Template(props) {
  useEffect(() => {
    if (props.networkConnection === false) {
      window.location.reload();
    }
  }, [props]);

  const dispatch = useDispatch();
  const [ScreenWidth, setScreenWidth] = useState();

  useEffect(() => {
    dispatch(dashboardAction.getDashboardData());
  }, []);

  const dashboardData = useSelector((state) => state);

  let handleResize = (e) => {
    if (window.innerWidth < 700) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Layout style={{ height: "100%", padding: "0px" }}>
      <Content
        style={{
          overflow: "auto",
          // background: "rgb(202 202 202)",
        }}
      >
        {props.roleDisplay && props.roleDisplay === "Admin" ? (
          <div>
            <Row
              gutter={[16, 16]}
              style={{ marginBottom: "1rem", marginLeft: 0, marginRight: 0 }}
            >
              {dashboardData &&
                dashboardData.map((ele, index) => (
                  <Col
                    key={index}
                    xs={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={6}
                    id={index}
                  >
                    <StatCard
                      index={index}
                      title={ele.title}
                      value={ele.value}
                      titleChange={ele.titleChange}
                      valuechange={ele.valuechange}
                    />
                  </Col>
                ))}
            </Row>
            <Row
              gutter={[16, 16]}
              style={{ marginBottom: "1rem", marginLeft: 0, marginRight: 0 }}
            >
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Card
                  hoverable
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <GraphUSA />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Card
                  hoverable
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ColumnChartTimeAxis />
                </Card>
              </Col>
            </Row>

            <Row
              gutter={[16, 16]}
              style={{ marginBottom: "1rem", marginLeft: 0, marginRight: 0 }}
            >
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Card
                  hoverable
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Polar />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Card
                  hoverable
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <VerticalBar />
                </Card>
              </Col>
            </Row>
          </div>
        ) : (
          <NotAutharised />
        )}
      </Content>
    </Layout>
  );
}

export { Template };
