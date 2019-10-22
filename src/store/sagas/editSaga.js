import { put } from "redux-saga/effects";
import axios from "../../api/prozorro";

import {
  editStart,
  editNotValid,
  editSuccess,
  editFail
} from "../actions/editActions";

export function* editSaga({ payload: { values, token } }) {
  yield put(editStart());

  const config = {
    headers: {
      Authorization: token
    }
  };

  const editData = {
    name: values.name,
    surname: values.surname,
    name_customer: values.nameCustomer,
    role: values.role
  };

  try {
    const response = yield axios.post("edit-user", editData, config);
    const data = response.data;
    if (data.status) {
      yield put(editSuccess(data.message));
    } else {
      yield put(editNotValid(data.message));
    }
  } catch (error) {
    yield put(editFail());
  }
}
