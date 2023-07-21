import { NetInfo } from "react-native";
import {
  BASE_URL,
  FETCH_REDEEM_BEGIN,
  FETCH_REDEEM_SUCCESS,
  FETCH_REDEEM_FAILED
} from "./types";

export const fetchRedeem = (rewardType, id) => {
  return dispatch => {
    fetchRedeemBegin(dispatch);
    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected) {
        fetch(`${BASE_URL}Redeem/${rewardType}/${id}`, {
          method: "GET"
        })
          .then(handleError)
          .then(data => data.json())
          .then(item => {
            fetchReedemSuccess(dispatch, item);
          })
          .catch(error => fetchReedemFailed(dispatch, 'An error occured when trying to get data.'));
      } else {
        return fetchReedemFailed(
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

export const fetchRedeemBegin = dispatch => {
  dispatch({
    type: FETCH_REDEEM_BEGIN
  });
};

export const fetchReedemSuccess = (dispatch, item) => {
  dispatch({
    type: FETCH_REDEEM_SUCCESS,
    payload: item
  });
};

export const fetchReedemFailed = (dispatch, error) => {
  dispatch({
    type: FETCH_REDEEM_FAILED,
    payload: error
  });
};
