/* eslint-disable */

import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Header from "../components/Header";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    if (token) {
      dispatch(userActions.getUserAPI());
    }
  }, []);
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
