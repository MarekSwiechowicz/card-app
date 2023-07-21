import {
  FETCH_REDEEM_BEGIN,
  FETCH_REDEEM_SUCCESS,
  FETCH_REDEEM_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  item: [],
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REDEEM_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_REDEEM_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload
      };
    case FETCH_REDEEM_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
