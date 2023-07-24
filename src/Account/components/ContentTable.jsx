import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Badge,
  Input,
  Space,
  Button,
  Avatar,
  Tag,
  Row,
  Col,
  Modal,
  Menu,
  Dropdown,
  Select,
} from "antd";
import Highlighter from "react-highlight-words";
import {
  FieldTimeOutlined,
  CalendarOutlined,
  UnorderedListOutlined,
  SearchOutlined,
  EditOutlined,
  CreditCardOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, Redirect, useHistory } from "react-router-dom";
import { listingDataHandle } from "../state/actions";

const { Option } = Select;
const { SubMenu } = Menu;

let getColor = ["magenta", "green", "orange", "gold", "volcano"];
let GetTags = (event) => {
  return event.event.map((ele, index) => {
    return (
      <Tag key={index} color={getColor[index]}>
        {ele.name}
      </Tag>
    );
  });
};

function tagRender(props) {
  const { label, closable, onClose } = props;

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

function ContentTable({ getSuggesionData, renderData }) {
  let history = useHistory();
  const [searchText, setsearchText] = useState("");
  const [searchedColumn, setsearchedColumn] = useState("");
  const [defaultValue, setDefaultValue] = useState([]);
  const [id, setId] = useState(null);
  const [loading, setokLoading] = useState(false);
  const [selectedValues, getSelectedValues] = useState([]);
  const { getCategoryData } = useSelector((state) => state.listingEdit);

  const dispatch = useDispatch();
  const [editFlag, setEditFlag] = useState(false);
  const searchInput = useRef();

  let handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  let handleReset = (clearFilters) => {
    clearFilters();
    setsearchText("");
  };

  let getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput.current = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setsearchText(selectedKeys[0]);
              setsearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  let handleEdit = (id, categoryIds) => {
    categoryIds &&
      categoryIds.forEach((element) => {
        setDefaultValue(...defaultValue, element.name);
      });
    setId(id);
    setEditFlag(true);
  };
  let handleDelete = (id, categoryIds) => {
    dispatch(listingDataHandle.deleteContract(id));
  };

  const handleCancel = () => {
    setokLoading(true);
    getSelectedValues([]);
    setEditFlag(false);
  };

  const handleOk = () => {
    setokLoading(true);
    dispatch(listingDataHandle.editCategoryArray(id, selectedValues));
    getSelectedValues([]);
    setTimeout(() => {
      setokLoading(false);
      setEditFlag(false);
    }, 2000);
  };

  const handleSelectedValues = (array) => {
    getSelectedValues(array);
  };

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

  const columns = [
    {
      title: "Contract",
      key: "thumbnail",
      render: (event, i) => (
        <Link to={`/contract/${event._id}`}>
          <Avatar
            key={"square"}
            shape="square"
            src={event.thumbnail ? event.thumbnail : ""}
            size={64}
            icon={<UnorderedListOutlined />}
          />
        </Link>
      ),
      align: "center",
    },
    {
      title: "Edit Contract",
      key: "Edit Contract",
      render: (event, i) => (
        <Link
          to={{
            pathname: `/preview/${event._id}`,
            state: { getSuggesionData: JSON.stringify(getSuggesionData) },
          }}
          disabled
        >
          Edit
        </Link>
      ),
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.localeCompare(b.name),
      ellipsis: true,
      align: "center",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
      render: (event, i) => (
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Tag icon={<CalendarOutlined />} color="default">
              {event.split("T")[0]}
            </Tag>
          </Col>
          <Col span={24}>
            <Tag icon={<FieldTimeOutlined />} color="default">
              {event.split("T")[1].split(".")[0]}
            </Tag>
          </Col>
        </Row>
      ),
      align: "center",
      defaultSortOrder: "descend",
    },
    {
      title: "Category",
      dataIndex: "categoryIds",
      key: "categoryIds",
      render: (event, i) => <GetTags key={i} event={event} />,
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "isDeleted",
      key: "isDeleted",
      filters: [
        { text: "Active", value: false },
        { text: "Deleted", value: true },
      ],
      onFilter: (value, record) => record.isDeleted === value,
      render: (event, i) => (
        <span key={"Active"}>
          <Badge status={event ? "error" : "success"} />
          {event ? "Deleted" : "Active"}
        </span>
      ),
      align: "center",
    },
    {
      title: "Redirect",
      key: "redirect",
      render: (event, index) => (
        <Link to={`/resure/contract/${event._id}`} target="_blank">
          Redirect To Web View
        </Link>
      ),
      align: "center",
    },
    {
      title: "Action",
      key: "operation",
      render: (event, index) => (
        <Dropdown
          overlay={() => settingMenu(event._id, event.categoryIds)}
          placement="bottomLeft"
          arrow
        >
          <SettingOutlined key="setting" />
        </Dropdown>
      ),
      align: "center",
    },
  ];

  let handlecurrent = (e, pageSize) => {
    // console.log("e", e, pageSize);
  };

  return (
    <>
      <Modal
        title="Edit Category"
        visible={editFlag}
        onOk={handleOk}
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
      <Table
        bordered
        className="components-table-demo-nested"
        columns={columns}
        dataSource={renderData}
        // scroll={{ x: "calc(700px + 40%)", y: 450 }}
        scroll="auto"
        pagination={{
          position: ["bottomCenter"],
          onChange: handlecurrent,
        }}
      />
    </>
  );
}

export { ContentTable };
