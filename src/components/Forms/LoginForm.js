import React from "react";
import { Form, Field } from "react-final-form";
import classes from "./Forms.module.css";
import InputForm from "../UI/InputForm/InputForm";
import { checkMail } from "../../shared/utility";

const LoginForm = ({ onSubmit, message }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "The field is required";
        } else {
          errors.email = checkMail(values.email)
            ? undefined
            : "Required format mail@any.any";
        }
        if (!values.password) {
          errors.password = "The field is required";
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <div className={classes.wrapForm}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <span className={classes.headerForm}>Login</span>

            <Field name="email">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  placeholder="Email:"
                  message={message}
                  type="text"
                />
              )}
            </Field>

            <Field name="password">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  placeholder="Password:"
                  message={message}
                  type="password"
                />
              )}
            </Field>

            <div className={classes.btnWrap}>
              <button
                type="submit"
                disabled={submitting || pristine}
                className={classes.btn}
              >
                Login
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
                className={classes.btn}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    />
  );
};

export default LoginForm;
