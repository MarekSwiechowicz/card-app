import React from "react";
import SplashScreen from "react-native-splash-screen";
import { NetInfo, StyleSheet, View } from "react-native";
import * as Keychain from "react-native-keychain";
import Reactotron from "reactotron-react-native";
import { BASE_URL } from "../../actions/types";

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  componentWillUnmount() {
    SplashScreen.hide();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();

      if (credentials) {
        var url = `${BASE_URL}login`;
        var data = JSON.stringify({
          Email: credentials.username,
          Password: credentials.password
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
                    return this.props.navigation.navigate("App");
                  default:
                    await Keychain.resetGenericPassword();
                    return this.props.navigation.navigate("Auth");
                }
              })
              .catch(async error => {
                await Keychain.resetGenericPassword();
                this.props.navigation.navigate("Auth");
                console.error(error);
              });
          } else {
            Reactotron.log("Error: Please verify your internet connection.");
            return this.props.navigation.navigate("Auth");
          }
        });
      } else {
        this.props.navigation.navigate("Auth");
        Reactotron.log("No credentials stored");
      }
    } catch (error) {
      this.props.navigation.navigate("Auth");
      Reactotron.log("Keychain couldn't be accessed!", error);
    }
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  }
});

export default AuthLoadingScreen;
