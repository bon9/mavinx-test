import React from "react";
import { Form, Field } from "react-final-form";
import classes from "./Forms.module.css";
import InputForm from "../UI/InputForm/InputForm";

const EditForm = ({ onSubmit, user }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (values.role && +values.role !== 1 && +values.role !== 2) {
          errors.role = "Required 1 or 2";
        }
        if (+values.role === 2 && !values.nameCustomer) {
          errors.nameCustomer = "The field is required for role 2";
        }
        return errors;
      }}
      initialValues={{
        name: user.name,
        surname: user.surname
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <div className={classes.wrapForm}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <span className={classes.describe}>
              Изменения применятся при следующем входе
            </span>
            <Field name="name">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  placeholder="Имя:"
                  type="text"
                />
              )}
            </Field>
            <Field name="surname">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
                  placeholder="Фамилия:"
                  type="text"
                />
              )}
            </Field>
            <Field name="role">
              {({ input, meta }) => (
                <InputForm
                  input={input}
                  meta={meta}
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
                  placeholder="Имя заказчика: "
                  type="text"
                />
              )}
            </Field>
            <div className={classes.btnWrap}>
              <button
                type="submit"
                disabled={submitting || pristine}
                className={classes.btn}
              >
                Save
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

export default EditForm;
