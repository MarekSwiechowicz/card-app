import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import * as Keychain from "react-native-keychain";
import Reactotron from "reactotron-react-native";

class SignOutScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    try {
      await Keychain.resetGenericPassword();
      this.props.navigation.navigate("Auth");
    } catch (error) {
      Reactotron.log("Keychain couldnt be accessed!", error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"small"} color={"#e41567"} />
      </View>
    );
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

export default SignOutScreen;
