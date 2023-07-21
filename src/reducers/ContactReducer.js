import {
  FETCH_CONTACT_DETAILS_BEGIN,
  FETCH_CONTACT_DETAILS_SUCCESS,
  FETCH_CONTACT_DETAILS_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  contactDetails: [],
  contactLoading: false,
  contactError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CONTACT_DETAILS_BEGIN:
      return {
        ...state,
        contactLoading: true,
        contactError: null
      };
    case FETCH_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        contactLoading: false,
        contactDetails: action.payload
      };
    case FETCH_CONTACT_DETAILS_FAILED:
      return {
        ...state,
        contactLoading: false,
        contactError: action.payload
      };
    default:
      return state;
  }
};
