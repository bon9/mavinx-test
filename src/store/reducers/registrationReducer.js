import * as actionTypes from "../actions/actionTypes";

const initialState = {
  message: "",
  loading: false,
  isNotValid: false,
  showModal: false,
  isRedirect: false
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.REG_START:
      return { ...state, message: "", loading: true };

    case actionTypes.REG_NOT_VALID:
      return {
        ...state,
        message: payload,
        isNotValid: true,
        loading: false
      };

    case actionTypes.REG_SUCCESS:
      return {
        ...state,
        message: payload,
        isNotValid: false,
        loading: false,
        isRedirect: false
      };

    case actionTypes.REG_FAIL:
      return {
        ...state,
        isNotValid: false,
        loading: false
      };

    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        isNotValid: false,
        loading: false,
        showModal: payload,
        isRedirect: false
      };

    case actionTypes.IS_REDIRECT:
      return {
        ...state,
        isNotValid: false,
        loading: false,
        showModal: false,
        isRedirect: payload
      };

    default:
      return state;
  }
};

export default reducer;
