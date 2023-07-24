import React from "react";
import { Row, Col, Layout } from "antd";
import { Route, Redirect } from "react-router-dom";
import { UserLogin } from "./components/UserLogin";
import styles from "./styles/User.module.css";
import Logo from "../../Assets/Icons/Logo.png";
const { Content } = Layout;

// function UserAuthenticate() {
//   return (
//     <Layout style={{ height: "100vh", background: "#fff" }}>
//       <Row style={{ height: "100%" }} align="middle">
//         <Col span={12}>
//           <Content>
//             <div className={styles.alignBackground}></div>
//             <img
//               className={styles.alignForhead}
//               src={Logo}
//               alt="userLoginLogo"
//             />
//           </Content>
//         </Col>
//         <Col span={12}>
//           <Content>
//             <UserLogin />
//           </Content>
//         </Col>
//       </Row>
//     </Layout>
//   );
// }

/**
 * @function PrivateRoute
 * @param {Object} Object parent object paraments
 * @returns {Object} JSX.Element
 * Higher order function that validates the auth token before proceeding
 */
const UserAuthenticate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div>
          <Layout style={{ height: "100vh", background: "#fff" }}>
            <Row style={{ height: "100%" }} align="middle">
              <Col span={12}>
                <Content>
                  <div className={styles.alignBackground}></div>
                  <img
                    className={styles.alignForhead}
                    src={Logo}
                    alt="userLoginLogo"
                  />
                </Content>
              </Col>
              <Col span={12}>
                <Content>
                  <Component {...props} />
                  {/* <UserLogin /> */}
                </Content>
              </Col>
            </Row>
          </Layout>
        </div>
      )}
    />
  );
};
export { UserAuthenticate };
