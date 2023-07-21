import { NetInfo } from "react-native";
import {
  BASE_URL,
  FETCH_SUBREWARDS_BEGIN,
  FETCH_SUBREWARDS_SUCCESS,
  FETCH_SUBREWARDS_FAILED
} from "./types";

export const fetchSubRewards = urlName => {
  return dispatch => {
    fetchSubRewardsBegin(dispatch);
    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected) {
        fetch(`${BASE_URL}SubReward/${urlName}`, {
          method: "GET"
        })
          .then(handleError)
          .then(data => data.json())
          .then(item => {
            fetchSubRewardsSuccess(dispatch, item);
          })
          .catch(error => fetchSubRewardsFailed(dispatch, 'An error occured when trying to get data.'));
      } else {
        fetchSubRewardsFailed(
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

export const fetchSubRewardsBegin = dispatch => {
  dispatch({
    type: FETCH_SUBREWARDS_BEGIN
  });
};

export const fetchSubRewardsSuccess = (dispatch, item) => {
  dispatch({
    type: FETCH_SUBREWARDS_SUCCESS,
    payload: item
  });
};

export const fetchSubRewardsFailed = (dispatch, error) => {
  dispatch({
    type: FETCH_SUBREWARDS_FAILED,
    payload: error
  });
};
