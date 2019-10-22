import React from "react";
import { connect } from "react-redux";
import classes from "./Registration.module.css";

import { registration } from "../../store/actions/registrationActions";
import prozorro from "../../api/prozorro";
import withErrorHandler from "./../../hoc/withErrorHandler";
import RegistrationForm from "./../../components/Forms/RegistrationForm";
import Portal from "./../../components/Portal/Portal";

const Registration = ({ registration, message, isNotValid }) => {
  const onSubmit = values => {
    registration(values);
  };

  let outputMessage = !isNotValid ? message : "";

  return (
    <div className={classes.registration}>
      <RegistrationForm onSubmit={onSubmit} message={message} />
      <Portal id="portaaal">THIS PORTAL</Portal>
      <div>{outputMessage}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.registration.message,
    isNotValid: state.registration.isNotValid
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onAuth: (email, password, isSignup) =>
//       dispatch(actions.auth(email, password, isSignup))
//   };
// };

export default connect(
  mapStateToProps,
  { registration }
)(withErrorHandler(Registration, prozorro));
