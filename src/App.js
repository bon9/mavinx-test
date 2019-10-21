import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import * as actions from "./store/actions/";

import classes from "./App.module.css";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import MainPage from "./containers/MainPage/MainPage";
import Personal from "./containers/Personal/Personal";
import Logout from "./containers/Logout/Logout";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

function App({ isReg, isLogOn }) {
  let routes = (
    <Switch>
      <Route path="/registatrion" component={Registration} />
      <Redirect to="/registatrion" />
    </Switch>
  );
  if (isReg) {
    routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registatrion" component={Registration} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  if (isLogOn) {
    routes = (
      <Switch>
        {/* в каждом сделать проверку на isAuth, если фолс то перенаправить на логинизацию */}
        <Route path="/personal" component={Personal} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className={classes.app}>
      <Toolbar isLogOn={isLogOn} isReg={isReg}></Toolbar>
      <main className={classes.content}>{routes}</main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isReg: state.token !== null,
    isLogOn: state.loggedOn
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   };
// };

export default connect(mapStateToProps)(App);
