import { NetInfo } from "react-native";
import * as Keychain from "react-native-keychain";
import NavigationService from "../navigator/NavigationService";
import {
  BASE_URL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from "./types";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    var url = `${BASE_URL}login`;
    var data = JSON.stringify({
      Email: email,
      Password: password
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
          .then(async response => {
            const { status } = response;
            switch (status) {
              case 200:
                await Keychain.setGenericPassword(email, password);
                return loginUserSuccess(dispatch);
              case 400:
                await Keychain.resetGenericPassword();
                return loginUserFailed(dispatch, "Invalid credentials");
              case 401:
                return loginUserFailed(
                  dispatch,
                  "Account issues.  Please contact us."
                );
              case 500:
                return loginUserFailed(
                  dispatch,
                  "There is a problem with the system, please try again later."
                );
              default:
                console.log("LOGIN FAILED");
            }
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        return loginUserFailed(
          dispatch,
          "Please verify your internet connection."
        );
      }
    });
  };
};

const loginUserSuccess = dispatch => {
  NavigationService.navigate("App");
  dispatch({
    type: LOGIN_USER_SUCCESS
  });
};

const loginUserFailed = (dispatch, text) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: text
  });
};
