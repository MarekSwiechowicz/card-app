import { NetInfo } from "react-native";
import {
  BASE_URL,
  GET_VENUES_BEGIN,
  GET_VENUES_SUCCESS,
  GET_VENUES_FAILED,
  GET_VENUES_INITIAL_STATE
} from "./types";

export const getVenues = (id, region) => {
  return dispatch => {
    getVenuesBegin(dispatch);
    var url = "https://supercardblack.com/Listing/GetVenues";
    var data = JSON.stringify({
      RewardId: [id],
      Region: region
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
            getVenuesSuccess(dispatch, item);
          })
          .catch(error => getVenuesFailed(dispatch, error));
      } else {
        getVenuesFailed(dispatch, "Please verify your internet connection.");
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

export const getVenuesBegin = dispatch => {
  dispatch({
    type: GET_VENUES_BEGIN
  });
};

export const getVenuesSuccess = (dispatch, item) => {
  dispatch({
    type: GET_VENUES_SUCCESS,
    payload: item
  });
};

export const getVenuesFailed = (dispatch, error) => {
  dispatch({
    type: GET_VENUES_FAILED,
    payload: error
  });
};

export const getVenuesInitialState = () => {
  return dispatch => {
    dispatch({
      type: GET_VENUES_INITIAL_STATE
    });
  };
};
