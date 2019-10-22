import * as actionTypes from "../actions/actionTypes";

const initialState = {
  message: "",
  loading: false,
  isNotValid: false,
  edited: false
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case actionTypes.EDIT_START:
      return { ...state, message: "", loading: true, edited: false };

    case actionTypes.EDIT_NOT_VALID:
      return {
        ...state,
        message: payload,
        isNotValid: true,
        loading: false,
        edited: false
      };

    case actionTypes.EDIT_SUCCESS:
      return {
        ...state,
        message: payload,
        isNotValid: false,
        loading: false,
        edited: true
      };

    case actionTypes.EDIT_FAIL:
      return {
        ...state,
        isNotValid: false,
        loading: false,
        edited: false
      };

    case actionTypes.EDITED_STATE_CANCEL:
      return {
        ...state,
        edited: false
      };

    default:
      return state;
  }
};

export default reducer;
