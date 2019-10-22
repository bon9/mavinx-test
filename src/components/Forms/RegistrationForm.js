import React from "react";
import { Form, Field } from "react-final-form";
import classes from "./Forms.module.css";
import InputForm from "../UI/InputForm/InputForm";
import { minLength, checkMail, checkPhone } from "../../shared/utility";

const RegistrationForm = ({ onSubmit, message }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = "The field is required";
        }
        if (!values.surname) {
          errors.surname = "The field is required";
        }
        if (!values.surname) {
          errors.surname = "The field is required";
        }
        if (!values.role) {
          errors.role = "The field is required";
        }
        if (values.role && +values.role !== 1 && +values.role !== 2) {
          errors.role = "Required 1 or 2";
        }
        if (+values.role === 2 && !values.nameCustomer) {
          errors.nameCustomer = "The field is required for role 2";
        }
        if (!values.email) {
          errors.email = "The field is required";
        } else {
          errors.email = checkMail(values.email)
            ? undefined
            : "Required format mail@any.any";
        }
        if (!values.phone) {
          errors.phone = "The field is required";
        } else {
          errors.phone = checkPhone(values.phone)
            ? undefined
            : "Required format 380123456784";
        }
        if (!values.password) {
          errors.password = "The field is required";
        } else {
          errors.password = minLength(6, values.password);
        }
        if (!values.confirm) {
          errors.confirm = "The field is required";
        } else if (values.password !== values.confirm) {
          errors.confirm = "Must match";
        }

        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <div className={classes.wrapForm}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <span className={classes.headerForm}>Registration</span>
            <Field name="name">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  message={message.name}
                  placeholder="Ваше имя:"
                  type="text"
                />
              )}
            </Field>
            <Field name="surname">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  message={message.surname}
                  placeholder="Ваша фамилия:"
                  type="text"
                />
              )}
            </Field>
            <Field name="role">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  message={message.role}
                  placeholder="1 - поставщик, 2 - заказчик"
                  type="text"
                />
              )}
            </Field>
            <Field name="nameCustomer">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  placeholder="Имя заказчика:"
                  type="text"
                />
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  message={message.email}
                  placeholder="Email:"
                  type="email"
                />
              )}
            </Field>
            <Field name="phone">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  message={message.phone}
                  placeholder="Phone:"
                  type="text"
                />
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  message={message.password && message.password[0]}
                  placeholder="Password:"
                  type="password"
                />
              )}
            </Field>
            <Field name="confirm">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  message={message.password && message.password[1]}
                  placeholder="Confirm password:"
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
                Зарегестрироваться
              </button>
            </div>
          </form>
        </div>
      )}
    />
  );
};

export default RegistrationForm;
