import React from "react";
import classes from "./Backdrop.module.css";

// фон при активном модальном окне
const backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
