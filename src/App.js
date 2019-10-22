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

function App({ isAuth, user, token }) {
  // console.log(user, token);
  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registatrion" component={Registration} />
      <Redirect to="/registatrion" />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        {/* в каждом сделать проверку на isAuth, если фолс то перенаправить на логинизацию */}
        <Route path="/" exact component={MainPage} />
        <Route path="/personal" component={Personal} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className={classes.app}>
      <Toolbar isAuth={isAuth}></Toolbar>
      <main className={classes.content}>{routes}</main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
    user: state.auth.user,
    token: state.auth.token
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   };
// };

export default connect(mapStateToProps)(App);
