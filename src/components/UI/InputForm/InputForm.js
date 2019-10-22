import React from "react";
import classes from "./InputForm.module.css";

const InputForm = ({ input, meta, placeholder, message, type }) => {
  const inputStyle =
    message || (meta.error && meta.touched)
      ? classes.input + " " + classes.required
      : classes.input;

  return (
    <div className={classes.containerInput}>
      <span className={classes.spanError}>
        {message || (meta.error && meta.touched) ? message || meta.error : " "}
      </span>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
};

export default InputForm;
