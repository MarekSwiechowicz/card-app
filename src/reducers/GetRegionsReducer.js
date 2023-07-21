import {
  GET_REGIONS_BEGIN,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  regions: [],
  regionsLoading: false,
  regionsError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_REGIONS_BEGIN:
      return {
        ...state,
        regionsLoading: true,
        regionsError: null
      };
    case GET_REGIONS_SUCCESS:
      return {
        ...state,
        regionsLoading: false,
        regions: action.payload
      };
    case GET_REGIONS_FAILED:
      return {
        ...state,
        regionsLoading: false,
        regionsError: action.payload
      };
    default:
      return state;
  }
};
