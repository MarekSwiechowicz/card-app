import {
  GET_VENUES_BEGIN,
  GET_VENUES_SUCCESS,
  GET_VENUES_FAILED,
  GET_VENUES_INITIAL_STATE
} from "../actions/types";

const INITIAL_STATE = {
  venues: [],
  venuesLoading: false,
  venuesError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VENUES_BEGIN:
      return {
        ...state,
        venuesLoading: true,
        venuesError: null
      };
    case GET_VENUES_SUCCESS:
      return {
        ...state,
        venuesLoading: false,
        venues: action.payload
      };
    case GET_VENUES_FAILED:
      return {
        ...state,
        venuesLoading: false,
        venuesError: action.payload
      };
    case GET_VENUES_INITIAL_STATE:
      return {
        state
      };
    default:
      return state;
  }
};
