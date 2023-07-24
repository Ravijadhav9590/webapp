import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useLocation } from "react-router-dom";
import { contractDataHandle } from "./state/actions";
import { Layout, Spin } from "antd";
// import { ContractNav } from "./components/ContractNav";
// import { PDFview } from "./components/PDFview";
// import { TreeView } from "./components/TreeView";
import { Loading } from "../Common";
import { SuccessForm } from "../Common";
// import { contractStoreHandle } from "../ContractStore/state/actions";
import dayjs from "dayjs";

// import styles from "./styles/Contract.module.css";
import { NotAutharised } from "../Common/components/NotAutharised";
const { Content, Footer } = Layout;

function Property(props) {
  useEffect(() => {
    if (props.networkConnection === false) {
      window.location.reload();
    }
  }, [props]);

  let { id } = useParams();

  let { search } = useLocation();

  const [treeviewDateFlagEvent, setTreeviewDateFlagEvent] = useState(false);

  // if (!id) {
  //   <Redirect to="/error" />;
  // }
  const dispatch = useDispatch();

  const [viewFlag, setViewFlag] = useState(true);
  const [exportLoading, setExportLoading] = useState(false);
  const [treeViewData, setGetTreeViewDate] = useState(null);
  const [submitLoading, setsubmitLoading] = useState(false);
  const [scrollEvent, setScrollEvent] = useState("");

  // const { contractData, contractLoading, contractError } = useSelector(
  //   (state) => state.contract
  // );

  let treeViewDataStore = [];
  useEffect(() => {
    dispatch(contractDataHandle.getContractData(id));
    return () => {
      localStorage.removeItem("persistKey");
      dispatch(contractDataHandle.resetCompressedViewData());
    };
  }, [id, dispatch]);

  // if (contractError) {
  //   return (
  //     <div style={{ height: "100vh" }}>
  //       <NotAutharised flag={false} />;
  //     </div>
  //   );
  // }

  let storedData = JSON.parse(localStorage.getItem("persistKey"));
  let treeViewEvent = (e) => {
    if (e.target.type === "checkbox") {
      dispatch();
      // contractStoreHandle.treeViewEventHandle(
      //   // { [e.target.name]: e.target.checked },
      //   { [e.target.name]: e.target.value },
      //   id,
      //   storedData
      // )
    } else {
      dispatch();
      // contractStoreHandle.treeViewEventHandle(
      //   { [e.target.name]: e.target.value },
      //   id,
      //   storedData
      // )
    }
  };

  let handleView = (event) => {
    setViewFlag(event);
  };

  let treeviewDateFlag = () => {
    setTreeviewDateFlagEvent(!treeviewDateFlagEvent);
  };

  let changeSwitch = (flag, value) => {
    setViewFlag(flag);
    setScrollEvent(value);
  };
  return (
    <Layout>
      <Content
        // className={styles.site_layout}
        style={{
          width: "-webkit-fill-available",
          // background: "rgb(245, 239, 239)",
          // padding: "0",
        }}
      >
        <div></div>
      </Content>
    </Layout>
  );
}

export { Property };
