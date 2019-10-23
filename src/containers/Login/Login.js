import React from "react";
import { connect } from "react-redux";
import classes from "./Login.module.css";
import prozorro from "../../api/prozorro";
import { login } from "../../store/actions/authActions";
import withErrorHandler from "./../../hoc/withErrorHandler";
import LoginForm from "./../../components/Forms/LoginForm";

const Login = ({ login, isNotValid, message }) => {
  const onSubmit = values => {
    login(values);
  };

  return (
    <div className={classes.login}>
      <LoginForm onSubmit={onSubmit} message={message} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.auth.message,
    errorRequest: state.auth.errorRequest,
    isNotValid: state.auth.isNotValid
  };
};

export default connect(
  mapStateToProps,
  { login }
)(withErrorHandler(Login, prozorro));
