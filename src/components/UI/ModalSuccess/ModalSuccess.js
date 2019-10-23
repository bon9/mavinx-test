import React from "react";
import classes from "./ModalSuccess.module.css";

const ModalSuccess = ({ isNotValid, message }) => {
  const cap = "Something wrond";
  return (
    <div className={classes.modalWrap}>
      <div className={classes.modal}>{!isNotValid ? message : cap}</div>
    </div>
  );
};

export default ModalSuccess;
