import { put } from "redux-saga/effects";
import axios from "../../api/prozorro";

import {
  loginStart,
  loginSuccess,
  loginNotValid,
  loginFail,
  logoutSuccess,
  logoutFail,
  logoutStart
} from "../actions/authActions";

export function* loginSaga({ payload }) {
  yield put(loginStart());
  const loginData = {
    email: payload.email,
    password: payload.password
  };

  try {
    const response = yield axios.post("login", loginData);
    const data = response.data;
    if (data.status) {
      const users = {
        token: data.token,
        user: data.user
      };
      yield put(loginSuccess(users));
    } else {
      yield put(loginNotValid(data.message));
    }
  } catch (error) {
    yield put(loginFail());
  }
}

export function* logout({ payload }) {
  yield put(logoutStart());
  const config = {
    headers: {
      Authorization: payload
    }
  };
  try {
    const response = yield axios.post("logout", {}, config);
    const data = response.data;
    if (data.status) {
      yield put(logoutSuccess());
    }
  } catch (error) {
    yield put(logoutFail());
  }
}
