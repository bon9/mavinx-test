import * as actionTypes from "./actionTypes";

export const edit = (values, token) => {
  return {
    type: actionTypes.EDIT,
    payload: { values, token }
  };
};

export const editStart = () => {
  return {
    type: actionTypes.EDIT_START
  };
};

export const editNotValid = message => {
  return {
    type: actionTypes.EDIT_NOT_VALID,
    payload: message
  };
};

export const editSuccess = message => {
  return {
    type: actionTypes.EDIT_SUCCESS,
    payload: message
  };
};

export const editFail = () => {
  return {
    type: actionTypes.EDIT_FAIL
  };
};

export const editedStateCancel = () => {
  return {
    type: actionTypes.EDITED_STATE_CANCEL
  };
};
