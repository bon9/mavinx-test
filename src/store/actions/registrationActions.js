import * as actionTypes from "./actionTypes";

export const registration = values => {
  return {
    type: actionTypes.REG_USER,
    payload: values
  };
};

export const regStart = () => {
  return {
    type: actionTypes.REG_START
  };
};

export const regNotValid = message => {
  return {
    type: actionTypes.REG_NOT_VALID,
    payload: message
  };
};

export const regSuccess = message => {
  return {
    type: actionTypes.REG_SUCCESS,
    payload: message
  };
};

export const regFail = () => {
  return {
    type: actionTypes.REG_FAIL
  };
};
