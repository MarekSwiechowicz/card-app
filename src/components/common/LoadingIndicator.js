import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

class LoadingIndicator extends Component {
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
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: "gray"
  }
});

export { LoadingIndicator };
