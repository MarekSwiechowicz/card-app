import {
  EMAIL_UNIQUE_CODE_BEGIN,
  EMAIL_UNIQUE_CODE_SUCCESS,
  EMAIL_UNIQUE_CODE_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  emailUniqeCodeSuccess: null,
  emailUniqeCodeLoading: false,
  emailUniqeCodeError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_UNIQUE_CODE_BEGIN:
      return {
        ...state,
        emailUniqeCodeLoading: true,
        emailUniqeCodeError: null
      };
    case EMAIL_UNIQUE_CODE_SUCCESS:
      return {
        ...state,
        emailUniqeCodeLoading: false,
        emailUniqeCodeSuccess: action.payload
      };
    case EMAIL_UNIQUE_CODE_FAILED:
      return {
        ...state,
        emailUniqeCodeLoading: false,
        emailUniqeCodeError: action.payload,
        emailUniqeCodeSuccess: null
      };
    default:
      return state;
  }
};
