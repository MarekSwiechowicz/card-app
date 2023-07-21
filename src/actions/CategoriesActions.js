import { NetInfo } from "react-native";
import {
  BASE_URL,
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED
} from "./types";

export const fetchCategories = () => {
  return dispatch => {
    fetchCategoriesBegin(dispatch);
    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected) {
        fetch(`${BASE_URL}Categories`, {
          method: "GET"
        })
          .then(handleError)
          .then(data => data.json())
          .then(categories => {
            fetchCategoriesSuccess(dispatch, categories);
          })
          .catch(error => fetchCategoriesFailed(dispatch, 'An error occured when trying to get data.'));
      } else {
        return fetchCategoriesFailed(
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

export const fetchCategoriesBegin = dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_BEGIN
  });
};

export const fetchCategoriesSuccess = (dispatch, categories) => {
  dispatch({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  });
};

export const fetchCategoriesFailed = (dispatch, error) => {
  dispatch({
    type: FETCH_CATEGORIES_FAILED,
    payload: error
  });
};
