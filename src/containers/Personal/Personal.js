import React from "react";
import { connect } from "react-redux";
import classes from "./Personal.module.css";
import { edit } from "../../store/actions/editActions";
import prozorro from "../../api/prozorro";
import withErrorHandler from "./../../hoc/withErrorHandler";
import { Redirect } from "react-router-dom";
import EditForm from "./../../components/Forms/EditForm";

const Personal = ({
  login,
  isNotValid,
  user,
  edit,
  token,
  message,
  edited
}) => {
  const onSubmit = values => {
    edit(values, token);
  };

  let outputMessage = "";
  // if (isNotValid) {
  //   console.log(message);
  // } else {
  //   outputMessage = message;
  // }
  let summary = (
    <div className={classes.personal}>
      EDIT FORM
      <EditForm onSubmit={onSubmit} user={user} />
      <div>{outputMessage}</div>
    </div>
  );

  // если редактирование успешно завершенно - редирект
  // и в mainpage установка edited в состояние по умолчанию (false)
  if (edited) {
    summary = <Redirect to="/mainpage" />;
  }

  return summary;
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    message: state.edit.message,
    edited: state.edit.edited
  };
};

export default connect(
  mapStateToProps,
  { edit }
)(withErrorHandler(Personal, prozorro));
