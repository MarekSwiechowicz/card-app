import { NetInfo } from "react-native";
import {
  BASE_URL,
  FETCH_CONTACT_DETAILS_BEGIN,
  FETCH_CONTACT_DETAILS_SUCCESS,
  FETCH_CONTACT_DETAILS_FAILED
} from "./types";

export const fetchContactDetails = () => {
  return dispatch => {
    fetchContactDetailsBegin(dispatch);
    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected) {
        fetch(`${BASE_URL}Account/ContactDetails`, {
          method: "GET"
        })
          .then(handleError)
          .then(data => data.json())
          .then(item => {
            fetchContactDetailsSuccess(dispatch, item);
          })
          .catch(error => fetchContactDetailsFailed(dispatch, error));
      } else {
        return fetchContactDetailsFailed(
          dispatch,
          "Please verify your internet connection."
        );
      }
    });
  };
};

function handleError(response) {
  if (response.status != 200) {
    throw Error(response.text);
  }
  return response;
}

export const fetchContactDetailsBegin = dispatch => {
  dispatch({
    type: FETCH_CONTACT_DETAILS_BEGIN
  });
};

export const fetchContactDetailsSuccess = (dispatch, item) => {
  dispatch({
    type: FETCH_CONTACT_DETAILS_SUCCESS,
    payload: item
  });
};

export const fetchContactDetailsFailed = (dispatch, error) => {
  dispatch({
    type: FETCH_CONTACT_DETAILS_FAILED,
    payload: error
  });
};
