import { NetInfo } from "react-native";
import {
  BASE_URL,
  FETCH_ACCOUNT_DETAILS_BEGIN,
  FETCH_ACCOUNT_DETAILS_SUCCESS,
  FETCH_ACCOUNT_DETAILS_FAILED
} from "./types";

export const fetchAccountDetails = () => {
  return dispatch => {
    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected) {
        fetchAccountDetailsBegin(dispatch);
        fetch(`${BASE_URL}Account`, {
          method: "GET"
        })
          .then(handleError)
          .then(data => data.json())
          .then(item => {
            fetchAccountDetailsSuccess(dispatch, item);
          })
          .catch(error => fetchAccountDetailsFailed(dispatch, error));
      } else {
        fetchAccountDetailsFailed(
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

export const fetchAccountDetailsBegin = dispatch => {
  dispatch({
    type: FETCH_ACCOUNT_DETAILS_BEGIN
  });
};

export const fetchAccountDetailsSuccess = (dispatch, item) => {
  dispatch({
    type: FETCH_ACCOUNT_DETAILS_SUCCESS,
    payload: item
  });
};

export const fetchAccountDetailsFailed = (dispatch, error) => {
  dispatch({
    type: FETCH_ACCOUNT_DETAILS_FAILED,
    payload: error
  });
};
