import React from "react";
import { connect } from "react-redux";
import classes from "./Registration.module.css";

import { registration } from "../../store/actions/registrationActions";
import prozorro from "../../api/prozorro";
import withErrorHandler from "./../../hoc/withErrorHandler";
import RegistrationForm from "./../../components/Forms/RegistrationForm";
import ModalSuccess from "./../../components/UI/ModalSuccess/ModalSuccess";
import { Redirect } from "react-router-dom";

const Registration = ({
  registration,
  message,
  isNotValid,
  showModal,
  isRedirect
}) => {
  const onSubmit = values => {
    registration(values);
  };

  let summary = isRedirect ? (
    <Redirect to="/login" />
  ) : (
    <div className={classes.registration}>
      <RegistrationForm onSubmit={onSubmit} message={message} />
      {showModal && <ModalSuccess isNotValid={isNotValid} message={message} />}
    </div>
  );

  return summary;
};

const mapStateToProps = state => {
  return {
    message: state.registration.message,
    isNotValid: state.registration.isNotValid,
    showModal: state.registration.showModal,
    isRedirect: state.registration.isRedirect
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
