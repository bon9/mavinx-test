import * as actionTypes from "./actionTypes";

export const login = values => {
  return {
    type: actionTypes.LOGIN,
    payload: values
  };
};

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = userData => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userData
  };
};

export const loginNotValid = message => {
  return {
    type: actionTypes.LOGIN_NOT_VALID,
    payload: message
  };
};

export const loginFail = errorMessage => {
  return {
    type: actionTypes.LOGIN_FAIL,
    payload: errorMessage
  };
};

export const logout = token => {
  return {
    type: actionTypes.LOGOUT,
    payload: token
  };
};

export const logoutStart = () => {
  return {
    type: actionTypes.LOGOUT_START
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
};

export const logoutFail = () => {
  return {
    type: actionTypes.LOGOUT_FAIL
  };
};
