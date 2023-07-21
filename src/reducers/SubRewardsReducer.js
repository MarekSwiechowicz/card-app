import {
  FETCH_SUBREWARDS_BEGIN,
  FETCH_SUBREWARDS_SUCCESS,
  FETCH_SUBREWARDS_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  item: [],
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SUBREWARDS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SUBREWARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload
      };
    case FETCH_SUBREWARDS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
