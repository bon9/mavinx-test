import { takeEvery, all } from "redux-saga/effects";

import { regUserSaga } from "./registrationSaga";
import { loginSaga, logout } from "./authSaga";
import { editSaga } from "./editSaga";

import * as actionTypes from "../actions/actionTypes";

export function* watchRegistration() {
  yield all([takeEvery(actionTypes.REG_USER, regUserSaga)]);
}

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.LOGIN, loginSaga),
    takeEvery(actionTypes.LOGOUT, logout)
  ]);
}

export function* watchEdit() {
  yield all([takeEvery(actionTypes.EDIT, editSaga)]);
}
