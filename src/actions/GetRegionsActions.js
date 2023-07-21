import { NetInfo } from "react-native";
import {
  GET_REGIONS_BEGIN,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAILED
} from "./types";

export const getRegions = id => {
  return dispatch => {
    getRegionsBegin(dispatch);
    var url = "https://supercardblack.com/Listing/GetRegions";
    var data = JSON.stringify({
      RewardId: [id]
    });

    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected) {
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: data
        })
          .then(handleError)
          .then(data => data.json())
          .then(item => {
            getRegionsSuccess(dispatch, item);
          })
          .catch(error => getRegionsFailed(dispatch, error));
      } else {
        return getRegionsFailed(
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

export const getRegionsBegin = dispatch => {
  dispatch({
    type: GET_REGIONS_BEGIN
  });
};

export const getRegionsSuccess = (dispatch, item) => {
  dispatch({
    type: GET_REGIONS_SUCCESS,
    payload: item
  });
};

export const getRegionsFailed = (dispatch, error) => {
  dispatch({
    type: GET_REGIONS_FAILED,
    payload: error
  });
};
