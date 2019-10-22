import { put } from "redux-saga/effects";
import axios from "../../api/prozorro";

import {
  regStart,
  regNotValid,
  regSuccess,
  regFail
} from "../actions/registrationActions";

export function* regUserSaga({ payload }) {
  yield put(regStart());
  const regData = {
    name: payload.name,
    surname: payload.surname,
    name_customer: payload.nameCustomer,
    email: payload.email,
    phone: payload.phone,
    role: payload.role,
    password: payload.password,
    password_confirmation: payload.confirm
  };

  try {
    const response = yield axios.post("register", regData);
    const data = response.data;
    if (data.status) {
      yield put(regSuccess(data.message));
    } else {
      yield put(regNotValid(data.message));
    }
  } catch (error) {
    yield put(regFail());
  }
}
