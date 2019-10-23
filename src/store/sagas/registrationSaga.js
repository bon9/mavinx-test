import { put, delay } from "redux-saga/effects";
import axios from "../../api/prozorro";

import {
  regStart,
  regNotValid,
  regSuccess,
  regFail,
  showModal,
  isRedirect
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
      yield put(showModal(true));
      yield delay(1500);
      yield put(showModal(false));
      yield put(isRedirect(true));
    } else {
      yield put(regNotValid(data.message));
    }
  } catch (error) {
    yield put(regFail());
  }
}
