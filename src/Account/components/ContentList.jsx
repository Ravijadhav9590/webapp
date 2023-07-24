import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Row,
  Col,
  Button,
  Modal,
  Select,
  Tag,
  Dropdown,
  Menu,
} from "antd";
import {
  CreditCardOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
// import { listingDataHandle } from "../state/actions";
// import { listingEditAction } from "../../Client/state/actions";
const { Option } = Select;
const { SubMenu } = Menu;

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={"gold"}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

const { Meta } = Card;

function ContentList({ renderData }) {
  const dispatch = useDispatch();
  const [editFlag, setEditFlag] = useState(false);
  const [id, setId] = useState(null);
  const [loading, setokLoading] = useState(false);
  const [defaultValue, setDefaultValue] = useState([]);
  const [selectedValues, getSelectedValues] = useState([]);
  const { getCategoryData } = useSelector((state) => state.listingEdit);

  useEffect(() => {
    // dispatch(listingEditAction.getCategoryList());
  }, []);

  let handleEdit = (id, categoryIds) => {
    categoryIds &&
      categoryIds.forEach((element) => {
        setDefaultValue(...defaultValue, element.name);
      });
    setId(id);
    setEditFlag(true);
  };
  let handleDelete = (id, categoryIds) => {
    // dispatch(listingDataHandle.deleteContract(id));
  };

  const handleCancel = () => {
    setokLoading(true);
    getSelectedValues([]);
    setEditFlag(false);
  };

  const handleOk = () => {
    setokLoading(true);
    // dispatch(listingDataHandle.editCategoryArray(id, selectedValues));
    getSelectedValues([]);
    setTimeout(() => {
      setEditFlag(false);
    }, 2000);
  };

  const handleSelectedValues = (array) => {
    getSelectedValues(array);
  };

  const menu = (id) => (
    <Menu>
      <Menu.Item key="0">
        <Link to={`/resure/contract/${id}`} target="_blank">
          Redirect To Web View
        </Link>
      </Menu.Item>
    </Menu>
  );

  let handleMenuClick = (event, id, categoryIds) => {
    switch (event.key) {
      case "0": {
        handleEdit(id, categoryIds);
        break;
      }
      case "1": {
        handleDelete(id, categoryIds);
        break;
      }
      default:
        break;
    }
  };

  const settingMenu = (id, categoryIds) => (
    <Menu onClick={(e) => handleMenuClick(e, id, categoryIds)}>
      <SubMenu title="Edit" icon={<EditOutlined />}>
        <Menu.Item key={"0"} icon={<CreditCardOutlined />}>
          Edit Category
        </Menu.Item>
      </SubMenu>
      <Menu.ItemGroup>
        <Menu.Item key={"1"} icon={<DeleteOutlined />} danger>
          Delete
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div>
      <Modal
        title="Edit Category"
        visible={editFlag}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={
          ((
            <Button onClick={handleCancel} type="primary">
              Cancle
            </Button>
          ),
          (
            <Button onClick={handleOk} type="primary" loading={loading}>
              ok
            </Button>
          ))
        }
      >
        <Select
          mode="multiple"
          showArrow
          onChange={handleSelectedValues}
          tagRender={tagRender}
          style={{ width: "100%" }}
        >
          {getCategoryData &&
            getCategoryData.map((element, index) => {
              return (
                <Option key={index} value={element._id}>
                  {element.name}
                </Option>
              );
            })}
        </Select>
      </Modal>
      <Row gutter={[12, 12]}>
        {renderData &&
          renderData.map((ele) => {
            if (!ele.isDeleted) {
              return (
                <Col
                  key={ele._id}
                  xs={24}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={5}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    style={{ width: 240, padding: "10px" }}
                    cover={
                      <img
                        alt={ele.contractName}
                        style={{
                          transitionDuration: "5s",
                          curve: "ease-in-out",
                        }}
                        src={
                          ele.thumbnail
                            ? ele.thumbnail
                            : "https://img.apksum.com/6e/com.pdfreader.pdfvisualizador.powerpdf/1.5/icon.png"
                        }
                      />
                    }
                    actions={[
                      <Dropdown
                        overlay={() => settingMenu(ele._id, ele.categoryIds)}
                        placement="bottomLeft"
                        arrow
                      >
                        <SettingOutlined key="setting" />
                      </Dropdown>,
                      <Dropdown key="4" overlay={() => menu(ele._id)}>
                        <EllipsisOutlined key="ellipsis" />
                      </Dropdown>,
                    ]}
                  >
                    <Link to={`/contract/${ele._id}`}>
                      <Meta
                        title={ele.name}
                        description={[
                          <Button key="test" type="link" danger>
                            View
                          </Button>,
                        ]}
                      />
                    </Link>
                  </Card>
                </Col>
              );
            }
          })}
      </Row>
    </div>
  );
}

export { ContentList };
