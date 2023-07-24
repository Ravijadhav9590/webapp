import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Account } from "../Account";
import { Error404 } from "../Common/components/Error404";
import { Client } from "../Client";
import { DocumentSection } from "../DocumentSection";
import { PrivateRoute } from "./components/PrivateRoute";
import { LogoutWindow } from "./components/LogoutWindow";
import { UserAuthenticate } from "../User/UserAuthenticate";
import { UserLogin } from "../User/UserAuthenticate";
import { ForgetPassword } from "../User/UserAuthenticate";
import { UserSignUp } from "../User/UserAuthenticate";
import { Property } from "../Property";
import { Template } from "../Template";
import { Failed } from "../Common/components/Failed";

function App(props) {
  const [networkConnection, setNetworkConnection] = useState();

  const { roleType } = useSelector((state) => state.authenticate);
  let role = roleType && roleType ? roleType : localStorage.getItem("roleType");

  useEffect(() => {
    window.addEventListener("online", () => {
      setNetworkConnection(false);
      console.log("Became online");
      // location.reload();
    });
    window.addEventListener("offline", () => {
      setNetworkConnection(true);
      console.log("Became offline");
    });
  }, []);

  useEffect(() => {
    document.getElementById("loader") &&
      document.getElementById("loader").remove();
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute
            networkConnection={networkConnection}
            roleDisplay={role}
            exact
            path="/"
            component={DocumentSection}
          />
          <PrivateRoute
            networkConnection={networkConnection}
            roleDisplay={role}
            exact
            path="/document"
            component={DocumentSection}
          />
          <PrivateRoute
            networkConnection={networkConnection}
            roleDisplay={role}
            exact
            path="/property"
            component={Property}
          />
          <PrivateRoute
            networkConnection={networkConnection}
            roleDisplay={role}
            exact
            path="/template"
            component={Template}
          />
          <PrivateRoute
            networkConnection={networkConnection}
            roleDisplay={role}
            exact
            path="/client"
            component={Client}
          />
          <PrivateRoute
            networkConnection={networkConnection}
            roleDisplay={role}
            exact
            path="/account"
            component={Account}
          />

          <UserAuthenticate exact path="/login" component={UserLogin} />
          <UserAuthenticate
            exact
            path="/forgetpassword"
            component={ForgetPassword}
          />
          <UserAuthenticate exact path="/signup" component={UserSignUp} />

          <Route exact path="/error" component={Error404} />
          <Route exact path="/logout" component={LogoutWindow} />
          <Route exact path="/failed" component={Failed} />
          <Route path="*">
            <Redirect to="/error" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export { App };
