import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  user: "",
  message: "",
  loading: false,
  isNotValid: false,
  logoutError: false
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return { ...state, loading: true };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "",
        isNotValid: false,
        token: payload.token,
        user: payload.user
      };

    case actionTypes.LOGIN_NOT_VALID:
      return {
        ...state,
        loading: false,
        errorRequest: false,
        isNotValid: true,
        message: payload
      };

    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        errorRequest: true,
        loading: false,
        message: "",
        isNotValid: false
      };

    case actionTypes.LOGOUT_START:
      return { ...state, loading: true };

    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        user: "",
        logoutError: false,
        loading: false
      };

    case actionTypes.LOGOUT_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;
