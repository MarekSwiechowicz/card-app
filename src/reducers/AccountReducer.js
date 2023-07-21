import {
  FETCH_ACCOUNT_DETAILS_BEGIN,
  FETCH_ACCOUNT_DETAILS_SUCCESS,
  FETCH_ACCOUNT_DETAILS_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  accountDetails: [],
  accountLoading: false,
  accountError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_DETAILS_BEGIN:
      return {
        ...state,
        accountLoading: true,
        accountError: null
      };
    case FETCH_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        accountLoading: false,
        accountDetails: action.payload
      };
    case FETCH_ACCOUNT_DETAILS_FAILED:
      return {
        ...state,
        accountLoading: false,
        accountError: action.payload
      };
    default:
      return state;
  }
};
