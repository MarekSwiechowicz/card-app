import { NetInfo } from "react-native";
import {
  BASE_URL,
  FETCH_REWARDS_BEGIN,
  FETCH_REWARDS_FAILED,
  FETCH_DAYS_OUT_SUCCESS,
  FETCH_FOOD_DRINK_SUCCESS,
  FETCH_TRAVEL_SUCCESS,
  FETCH_PAMPER_FITNESS_SUCCESS,
  FETCH_ENTERTAINMENT_SUCCESS,
  FETCH_SUPERSAVINGS_SUCCESS,
  DAYS_OUT,
  FOOD_DRINK,
  TRAVEL,
  PAMPER_FITNESS,
  ENTERTAINMENT,
  SUPERSAVINGS
} from "./types";

export const fetchRewards = (categoryName, type) => {
  return dispatch => {
    fetchRewardsBegin(dispatch);
    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected) {
        fetch(`${BASE_URL}Reward/${categoryName}`, {
          method: "GET"
        })
          .then(handleError)
          .then(data => data.json())
          .then(items => {
            switch (type) {
              case FOOD_DRINK:
                fetchFoodDrinkRewardsSuccess(dispatch, items);
                break;
              case DAYS_OUT:
                fetchDaysOutRewardsSuccess(dispatch, items);
                break;
              case TRAVEL:
                fetchTravelRewardsSuccess(dispatch, items);
                break;
              case PAMPER_FITNESS:
                fetchPamperFitnessRewardsSuccess(dispatch, items);
                break;
              case ENTERTAINMENT:
                fetchEntertainmentRewardsSuccess(dispatch, items);
                break;
              case SUPERSAVINGS:
                fetchSupersavingsRewardsSuccess(dispatch, items);
                break;
            }
          })
          .catch(error => fetchRewardsFailed(dispatch, 'An error occured when trying to get data.'));
      } else {
        return fetchRewardsFailed(
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

export const fetchRewardsBegin = dispatch => {
  dispatch({
    type: FETCH_REWARDS_BEGIN
  });
};

export const fetchRewardsFailed = (dispatch, error) => {
  dispatch({
    type: FETCH_REWARDS_FAILED,
    payload: error
  });
};

export const fetchFoodDrinkRewardsSuccess = (dispatch, items) => {
  dispatch({
    type: FETCH_FOOD_DRINK_SUCCESS,
    payload: items
  });
};

export const fetchDaysOutRewardsSuccess = (dispatch, items) => {
  dispatch({
    type: FETCH_DAYS_OUT_SUCCESS,
    payload: items
  });
};

export const fetchTravelRewardsSuccess = (dispatch, items) => {
  dispatch({
    type: FETCH_TRAVEL_SUCCESS,
    payload: items
  });
};

export const fetchPamperFitnessRewardsSuccess = (dispatch, items) => {
  dispatch({
    type: FETCH_PAMPER_FITNESS_SUCCESS,
    payload: items
  });
};

export const fetchEntertainmentRewardsSuccess = (dispatch, items) => {
  dispatch({
    type: FETCH_ENTERTAINMENT_SUCCESS,
    payload: items
  });
};

export const fetchSupersavingsRewardsSuccess = (dispatch, items) => {
  dispatch({
    type: FETCH_SUPERSAVINGS_SUCCESS,
    payload: items
  });
};
