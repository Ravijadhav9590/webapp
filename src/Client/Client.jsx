import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Layout, Select } from "antd";
import { Loading } from "../Common/components/Loading";
import { listingEditAction } from "./state/actions";
import { EditableTable } from "./components/EditableTable";
import { AddCategory } from "./components/AddCategory";
import styles from "./styles/ListingEdit.module.css";
import { NotAutharised } from "../Common/components/NotAutharised";
const { Content } = Layout;
const { Option } = Select;

let catTypes = ["PRIMARY_CATEGORY", "SUB_CATEGORY", "DOC_TYPE"];

function Client(props) {
  useEffect(() => {
    if (props.networkConnection === false) {
      window.location.reload();
    }
  }, [props]);
  const dispatch = useDispatch();
  // const { getCategoryData, getCategoryLoading } = useSelector(
  //   (state) => state.listingEdit
  // );

  let getCategoryLoading = false;

  const [categoryType, setCategoryType] = useState("");

  useEffect(() => {
    dispatch(listingEditAction.getCategoryList());
  }, [dispatch]);

  let handleChange = (e) => {
    setCategoryType(e);
  };
  return (
    <Layout style={{ height: "100%", padding: "0px" }}>
      <Content
        style={{
          overflow: "auto",
          background: "rgb(202 202 202)",
          padding: "1rem",
        }}
      >
        {props.roleDisplay && props.roleDisplay === "Admin" ? (
          <div className={styles.site_layout_background}>
            {getCategoryLoading ? (
              <Loading />
            ) : (
              <Row gutter={[16, 16]}>
                <Col>
                  Select Category Type :
                  <Select style={{ width: 150 }} onChange={handleChange}>
                    {catTypes &&
                      catTypes.map((ele, index) => {
                        return <Option value={ele}>{ele}</Option>;
                      })}
                  </Select>
                </Col>
                {categoryType && (
                  <Col span={24}>
                    {/* <AddCategory categoryType={categoryType} /> */}
                  </Col>
                )}
                <Col span={24}>
                  {/* <EditableTable list={getCategoryData} /> */}
                </Col>
              </Row>
            )}
          </div>
        ) : (
          <NotAutharised />
        )}
      </Content>
    </Layout>
  );
}

export { Client };
