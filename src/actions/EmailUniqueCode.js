import { NetInfo } from "react-native";
import {
  BASE_URL,
  EMAIL_UNIQUE_CODE_BEGIN,
  EMAIL_UNIQUE_CODE_SUCCESS,
  EMAIL_UNIQUE_CODE_FAILED
} from "./types";

export const emailUniqueCode = id => {
  return dispatch => {
    emailUniqueCodeBegin(dispatch);
    var url = `${BASE_URL}emailUniqueCode`;
    var data = JSON.stringify({
      RedemptionMechanicId: id
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
          .then(response => {
            const { status } = response;
            switch (status) {
              case 200:
                return emailUniqueCodeSuccess(
                  dispatch,
                  "Unique code has been sent to your email address!"
                );
              case 400:
                return emailUniqueCodeFailed(dispatch, "Bad request");
              case 500:
                return emailUniqueCodeFailed(
                  dispatch,
                  "There is a problem with the system, please try again later."
                );
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        return emailUniqueCodeFailed(
          dispatch,
          "Please verify your internet connection."
        );
      }
    });
  };
};

export const emailUniqueCodeBegin = dispatch => {
  dispatch({
    type: EMAIL_UNIQUE_CODE_BEGIN
  });
};

export const emailUniqueCodeSuccess = (dispatch, message) => {
  dispatch({
    type: EMAIL_UNIQUE_CODE_SUCCESS,
    payload: message
  });
};

export const emailUniqueCodeFailed = (dispatch, error) => {
  dispatch({
    type: EMAIL_UNIQUE_CODE_FAILED,
    payload: error
  });
};
