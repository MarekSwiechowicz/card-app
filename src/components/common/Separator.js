import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class Separator extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 2,
    width: "100%",
    backgroundColor: "white"
  }
});

export { Separator };
